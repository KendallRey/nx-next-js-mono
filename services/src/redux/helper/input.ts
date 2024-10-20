import { SelectChangeEvent } from '@mui/material';
import { REDUX } from '../constant/slice';

export type InputElement =
  | HTMLInputElement
  | HTMLTextAreaElement
  | HTMLSelectElement;
export type InputRecord =
  | React.ChangeEvent<InputElement>
  | SelectChangeEvent<unknown>;

type IRecord = {
  [x: string]: string | number | null | boolean | any;
  [REDUX.FIELD.KEY]: string;
};

type IGetInputRecordOptions = {
  zeroIsNull?: boolean;
};

/**
 * Get input data, for full input control
 * @param  event - Change Event of HTML (input / textarea / select)
 * @returns Object with updated key-value pair and the latest key
 * @example
 * // For an input event with name="username" and value="john_doe"
 * ```json
 * {
 *   "username": "john_doe",
 *   "_latestKey": "username"
 * }
 * ```
 */
export const getInputRecord = (
  event: InputRecord,
  options?: IGetInputRecordOptions
): IRecord => {
  const element = event.target;

  if (element instanceof HTMLInputElement) {
    const { name, value, checked, type, multiple } = element;
    const files = element.files as FileList;

    let record: Record<string, unknown> = {};
    switch (type) {
      case 'text':
        record = { [name]: value };
        break;
      case 'number':
        record = { [name]: Number(value) };
        break;
      case 'checkbox':
        record = { [name]: checked };
        break;
      case 'email':
        record = { [name]: value.trim() === '' ? null : value };
        break;
      case 'file':
        record = { [name]: multiple ? files : files[0] };
        break;
      default:
        record = { [name]: value };
    }
    return { ...record, [REDUX.FIELD.KEY]: name };
  }
  if (element instanceof HTMLTextAreaElement) {
    const { name, value } = event.target;
    return { [name]: value, [REDUX.FIELD.KEY]: name };
  }
  if (element instanceof HTMLSelectElement) {
    const { name, value } = event.target;
    return { [name]: value, [REDUX.FIELD.KEY]: name };
  }
  // Money Field reaches this
  const { name, value } = element;

  if ('type' in element) {
    let data = { [name]: value, [REDUX.FIELD.KEY]: name };
    switch (element.type) {
      case 'number':
        if (options?.zeroIsNull) {
          const newValue = Number(value);
          if (isNaN(newValue) || newValue === 0) {
            data = { ...data, [name]: null };
          }
        }
        break;
    }
    return data;
  }

  return { [name]: value, [REDUX.FIELD.KEY]: name || '' };
};

export const getSelectMultipleInputRecord = <T = string>(
  event: InputRecord
): IRecord & { list: T[] } => {
  const { value, name } = event.target;
  if (!Array.isArray(value))
    return { [name]: [], [REDUX.FIELD.KEY]: name || '', list: [] };
  return { [name]: value as T, [REDUX.FIELD.KEY]: name || '', list: value };
};
