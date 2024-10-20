import { useCallback } from 'react';
import { useAppDispatch } from '../services/hooks';
import { getInputRecord, InputRecord } from '../helper/input';
import { ActionCreatorWithPayload } from '@reduxjs/toolkit';
import { getValidationErrors } from '@/model/helper/validation';
import { ZodObject } from 'zod';
import { useCallOnce } from '@/components/hooks/useCallOnce';
import { REDUX } from '../constant/slice';

type IUseReduxForm = {
  form: unknown;
  schema: ZodObject<any>;
  setFormAction: ActionCreatorWithPayload<Record<string, any>>;
  onLoad?: () => void;
};

const useReduxForm = (props?: IUseReduxForm) => {
  const { form, schema, setFormAction, onLoad } = props ?? {};

  const dispatch = useAppDispatch();

  const setForm = useCallback(
    (
      form: unknown,
      setFormAction: ActionCreatorWithPayload<Record<string, any>>,
      schema: ZodObject<any>
    ) => {
      const validation = schema.safeParse(form);
      dispatch(setFormAction(validation.data ?? {}));
    },
    [dispatch]
  );

  const _getSafeForm = useCallback(
    (form: unknown, schema: ZodObject<any>) => {
      const validation = schema.safeParse(form);
      const data = validation.data ?? {};

      const safeForm: Record<string, any> = {};
      const schemeKeys = Object.keys(schema.shape);

      schemeKeys.forEach((key) => {
        if (REDUX.FIELD.SKIPS.includes(key)) return;
        safeForm[key] = data[key];
      });
      return safeForm;
    },
    [dispatch, schema]
  );

  const setSafeForm = useCallback(
    (
      form: unknown,
      setFormAction: ActionCreatorWithPayload<Record<string, any>>,
      schema: ZodObject<any>
    ) => {
      const safeForm = _getSafeForm(form, schema);
      dispatch(setFormAction(safeForm));
    },
    [dispatch, _getSafeForm, schema]
  );

  const _setForm = useCallback(() => {
    if (!form || !schema || !setFormAction) return;
    const safeForm = _getSafeForm(form, schema);
    dispatch(setFormAction(safeForm));
    if (onLoad) onLoad();
  }, [form, schema, dispatch, onLoad, setFormAction, _getSafeForm]);

  useCallOnce(_setForm);

  const onChangeForm = useCallback(
    (
      e: InputRecord,
      editAction: ActionCreatorWithPayload<Record<string, any>>
    ) => {
      const record = getInputRecord(e);
      dispatch(editAction(record));
    },
    [dispatch]
  );

  const onValidateForm = useCallback(
    (
      form: unknown,
      setErrorAction: ActionCreatorWithPayload<Record<string, any>>,
      schema: ZodObject<any>
    ) => {
      const validation = schema.safeParse(form);
      if (!validation.success) {
        const error = getValidationErrors(validation);
        dispatch(setErrorAction(error));
        return false;
      }
      return true;
    },
    [dispatch]
  );

  return {
    onValidateForm,
    onChangeForm,
    setForm,
    setSafeForm,
  };
};

export default useReduxForm;
