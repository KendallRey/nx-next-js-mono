"use client";

import MuiButton from "@/components/button/Button";
import MuiDivider from "@/components/divider/Divider";
import { FileValidator } from "@/components/helper/files";
import { customEnqueueSnackbar, displaySnackbar } from "@/components/helper/notistack";
import MuiTypography from "@/components/typography/Typograph";
import { CircularProgress } from "@mui/material";
import React, { useCallback, useRef, useState } from "react";
import MuiImageList, { MuiImageListItem, MuiImageListItemBar } from "../image/Image";
import { nanoid } from "@reduxjs/toolkit";
import MuiIconButton from "../icon-button/IconButton";
import { HiPhoto, HiXMark } from "react-icons/hi2";

type IUploadFile = {
  uploadFn?: (file: File) => Promise<{ data?: any; error?: string }>;
  uploadsFn?: (imagesToUpdate: IImageToUpload[]) => Promise<string[]>;
  actionText?: string;
};

export type IImageToUpload = {
  key: string;
  url: string;
  setAsCover: boolean;
  file: File;
};

const UploadFile: React.FC<IUploadFile> = (props) => {
  const { uploadFn, uploadsFn, actionText } = props;

  const [isLoading, setIsLoading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const [imagesToUpload, setImagesToUpload] = useState<IImageToUpload[]>([]);
  const uploadFiles = useCallback(async () => {
    if (!imagesToUpload.length || !uploadsFn) return;
    setIsLoading(true);
    const ids = await uploadsFn(imagesToUpload);
    setImagesToUpload((prev) => prev.filter((image) => !ids.includes(image.key)));
    setIsLoading(false);
  }, [imagesToUpload, uploadsFn]);

  const onAttachFile = useCallback((e: RCE<HTMLInputElement>) => {
    const { files } = e.target;
    if (!files || !files.length) return;
    if (!validateFiles(files)) return;

    const _images: IImageToUpload[] = [];
    const imagesCount = Math.min(files.length, 10);
    for (let i = 0; i < imagesCount; i++) {
      const _file = files.item(i);
      if (!_file) return;
      _images.push({
        key: nanoid(),
        url: URL.createObjectURL(_file),
        setAsCover: false,
        file: _file,
      });
    }
    setImagesToUpload(_images);
  }, []);

  const onRemoveImage = useCallback((key: string) => {
    setImagesToUpload((prev) => prev.filter((item) => item.key !== key));
  }, []);

  const onSetAsCover = useCallback((key?: string) => {
    setImagesToUpload((prev) =>
      prev.map((item) => {
        return {
          ...item,
          setAsCover: key === item.key,
        };
      }),
    );
  }, []);

  // #region Dragging

  const [isDragging, setIsDragging] = useState(false);

  const handleOnDrag = (e: React.DragEvent<HTMLDivElement>, _isDragging: boolean) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(_isDragging);
  };

  const handleOnDrop = async (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();

    if (isLoading) {
      displaySnackbar({ action: "wait" });
      return;
    }
    setIsDragging(false);

    const {
      dataTransfer: { files },
    } = e;

    if (!validateFiles(files)) return;

    setIsLoading(false);
  };

  const validateFiles = (files: FileList) => {
    const fileValidator = new FileValidator(files);

    if (!fileValidator.isAllFilesImage()) {
      customEnqueueSnackbar({ variant: "error", message: "Invalid file type" });
      return false;
    }
    if (!fileValidator.isEachFileLowerThan(10)) {
      customEnqueueSnackbar({ variant: "error", message: "No more than 10mb" });
      return false;
    }
    return true;
  };

  // #endregion

  return (
    <div
      className={`dropzone flex flex-col border border-4 gap-2 border-dashed ${
        isDragging ? "border-primary-2" : ""
      } rounded p-4`}
      onDragEnter={(e) => handleOnDrag(e, true)}
      onDragEnd={(e) => handleOnDrag(e, false)}
      onDragOver={(e) => handleOnDrag(e, true)}
      onDrop={handleOnDrop}
    >
      <input
        ref={inputRef}
        value={""}
        className="hidden"
        type="file"
        onChange={onAttachFile}
        disabled={isLoading}
        multiple
      />
      <div className="flex justify-center gap-2 items-center flex-wrap">
        <MuiButton
          className="text-center"
          size="large"
          variant="outlined"
          onClick={() => inputRef.current?.click()}
          disabled={isLoading}
        >
          Browse File
        </MuiButton>
        <MuiTypography fontSize={16}>or</MuiTypography>
        <MuiTypography fontSize={20} className="text-neutral-700">
          Drag and drop file here...
        </MuiTypography>
      </div>
      <MuiDivider />
      <MuiButton
        onClick={uploadFiles}
        disabled={isLoading}
        endIcon={<CircularProgress size={20} hidden={!isLoading} />}
      >
        {actionText ?? "Upload"}
      </MuiButton>
      <div className="w-full">
        <ImageList imagesToUpload={imagesToUpload} onRemove={onRemoveImage} onSetAsCover={onSetAsCover} />
      </div>
    </div>
  );
};

export default UploadFile;

type IImageList = {
  imagesToUpload: IImageToUpload[];
  onRemove: (key: string) => void;
  onSetAsCover: (key?: string) => void;
};

const ImageList: React.FC<IImageList> = (props) => {
  const { imagesToUpload, onRemove, onSetAsCover } = props;
  return (
    <MuiImageList cols={2} rowHeight={350} sx={{ width: 500 }} className="mx-auto">
      {imagesToUpload.map((image) => (
        <MuiImageListItem key={image.key}>
          <img src={image.url} />
          <MuiImageListItemBar
            title=""
            position="bottom"
            subtitle={
              image.setAsCover ? (
                <MuiTypography onClick={() => onSetAsCover()} className="cursor-pointer" variant="caption">
                  Marked as Cover
                </MuiTypography>
              ) : (
                ""
              )
            }
            actionIcon={
              <div className="flex items-center gap-1">
                <MuiIconButton color="secondary" onClick={() => onSetAsCover(image.key)} hidden={image.setAsCover}>
                  <HiPhoto />
                </MuiIconButton>
                <MuiIconButton color="secondary" onClick={() => onRemove(image.key)}>
                  <HiXMark />
                </MuiIconButton>
              </div>
            }
          />
        </MuiImageListItem>
      ))}
    </MuiImageList>
  );
};
