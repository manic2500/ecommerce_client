import type { ErrorResponse } from "@/types/ErrorResponse";
import { clsx, type ClassValue } from "clsx"
import type { FieldValues, Path, UseFormSetError } from "react-hook-form";
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function isErrorResponse(err: unknown): err is ErrorResponse {
  return (
    typeof err === "object" &&
    err !== null &&
    typeof (err as Record<string, unknown>).status === "number" &&
    typeof (
      (err as Record<string, unknown>).data as Record<string, unknown>
    )?.message === "string"
  );
}

export function handleFormError<T extends FieldValues>(
  err: unknown,
  setError: UseFormSetError<T>,
  rootField: Path<T> // <-- type-safe key of your form
) {
  if (isErrorResponse(err)) {
    setError(rootField, {
      type: "server",
      message: err.data.message,
    });
  } else if (err instanceof Error) {
    setError(rootField, {
      type: "server",
      message: err.message,
    });
  } else {
    setError(rootField, {
      type: "server",
      message: "Unexpected error occurred",
    });
  }
}