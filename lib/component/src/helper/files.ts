export type IFile = {
  id: string;
  file: File;
};

export const ImageFileTypes = ["image/jpeg", "image/png", "image/webp", "image/gif"];

export const ValidFileTypeListToEdit = ["image/jpeg", "image/png", "application/pdf"];

export const PlayableVideoExtensions = ["mp4"];

export class FileValidator {
  private _fileList: FileList | null;

  public constructor(_fileList: FileList | null) {
    this._fileList = _fileList;
  }

  public isFileListValid() {
    if (!this._fileList) {
      return false;
    }
    if (this._fileList.length <= 0) {
      return false;
    }
    let isThereNull = false;
    for (let i = 0; i < this._fileList.length; i++) {
      if (this._fileList.item(i) === null) {
        isThereNull = true;
        break;
      }
    }
    return !isThereNull;
  }

  public isEachFileLowerThan(mb: number) {
    if (!this._fileList) return false;
    let isLower = true;
    const byte = mb * 1024 * 1024;
    for (let i = 0; i < this._fileList.length; i++) {
      const tempFile = this._fileList.item(i);
      if (!tempFile || tempFile.size >= byte) {
        isLower = false;
        break;
      }
    }
    return isLower;
  }

  public isEachFileTypeValid() {
    if (!this._fileList) return false;
    let isValid = true;
    for (let i = 0; i < this._fileList.length; i++) {
      const tempFile = this._fileList.item(i);
      if (!tempFile || tempFile.type.trim() === "") {
        isValid = false;
        break;
      }
    }
    return isValid;
  }

  public isEachFileNameValid() {
    if (!this._fileList) return false;
    let isValid = true;
    for (let i = 0; i < this._fileList.length; i++) {
      const tempFile = this._fileList.item(i);
      if (!tempFile || tempFile.name.split(".").length !== 2) {
        isValid = false;
        break;
      }
    }
    return isValid;
  }

  public isAllFilesImage() {
    if (!this._fileList) return false;
    let isValid = true;
    for (let i = 0; i < this._fileList.length; i++) {
      const tempFile = this._fileList.item(i);
      if (!tempFile || !ImageFileTypes.includes(tempFile.type)) {
        isValid = false;
        break;
      }
    }
    return isValid;
  }

  public tryGetFirstFile() {
    if (!this._fileList) return null;
    return this._fileList.item(0);
  }

  public isNameInList(files: File[], file: FileList) {
    let sameNameExist = false;
    for (let i = 0; i < file.length; i++) {
      const temp = file?.item(i);
      const sameNames = files.filter((item) => item?.name === temp?.name);
      if (sameNames.length > 0) {
        sameNameExist = true;
        break;
      }
    }
    return sameNameExist;
  }

  public isSizeLowerThan(mb: number, file: File) {
    return file.size / 1024 / 1024 < mb;
  }

  public isTypeValid(file: File) {
    return file.type.trim() !== "";
  }

  public isFileValid(file: File | null) {
    return file !== null;
  }
}
