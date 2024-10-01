"use client";

import { useEffect, useRef } from "react";
import { useRouter, usePathname } from "next/navigation";
import Swal from "sweetalert2";

const UNSAVED_PROMPT = {
  TEXT: {
    TITLE: "Are you sure?",
    MESSAGE: "You have unsaved changes. Do you want to leave this page?",
    CONFIRM: "Yes, leave",
    CANCEL: "No, stay",
  },
} as const;

export const useUnsavedChangesWarning = (isDirty?: boolean) => {
  const router = useRouter();
  const pathname = usePathname();
  const isConfirming = useRef(false);
  useEffect(() => {
    const handleWindowClose = (event: BeforeUnloadEvent) => {
      if (!isDirty) return;
      event.preventDefault();
      event.returnValue = "";
    };

    const handleRouteChange = async (url: string) => {
      if (!isDirty || isConfirming.current) return;

      isConfirming.current = true;

      Swal.fire({
        title: UNSAVED_PROMPT.TEXT.TITLE,
        text: UNSAVED_PROMPT.TEXT.MESSAGE,
        showCancelButton: true,
        confirmButtonText: UNSAVED_PROMPT.TEXT.CONFIRM,
        cancelButtonText: UNSAVED_PROMPT.TEXT.CANCEL,
      }).then((result) => {
        if (result.isConfirmed) {
          router.push(url);
        } else {
          router.replace(pathname);
        }
        isConfirming.current = false;
      });

      return false;
    };

    window.addEventListener("beforeunload", handleWindowClose);

    const originalPush = router.push;
    router.push = async (url: string, ...args: any) => {
      const newURL = await handleRouteChange(url);
      if (newURL === false) return;
      return originalPush(url, ...args);
    };

    return () => {
      window.removeEventListener("beforeunload", handleWindowClose);
      router.push = originalPush;
    };
  }, [isDirty, router, pathname]);
};

export default useUnsavedChangesWarning;

/**
 * Template prompt confirmation for leaving a page or form.
 * @returns `true` if confirm, `false` otherwise.
 */
export const confirmUnsavedChanges = async () => {
  const { isConfirmed } = await Swal.fire({
    title: UNSAVED_PROMPT.TEXT.TITLE,
    text: UNSAVED_PROMPT.TEXT.MESSAGE,
    showCancelButton: true,
    confirmButtonText: UNSAVED_PROMPT.TEXT.CONFIRM,
    cancelButtonText: UNSAVED_PROMPT.TEXT.CANCEL,
  });

  return isConfirmed;
};
