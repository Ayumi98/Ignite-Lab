import { InputHTMLAttributes, ReactNode } from "react";
import { clsx } from "clsx";
import { Slot } from "@radix-ui/react-slot";

export interface TextInputRootProps {
  children: ReactNode;
}

function TextInputRoot({ children }: TextInputRootProps) {
  return (
    <div
      className={clsx(
        "flex items-center gap-3 h-12 py-4 px-3 rounded bg-gray-800 w-full focus-within:ring-2 ring-cyan-300"
      )}
    >
      {children}
    </div>
  );
}

TextInputRoot.displayName = "TextInput";

export interface TextInputIconProps {
  children: ReactNode;
}

function TextInputIcon({ children }: TextInputIconProps) {
  return <Slot className="w-6 h-6 text-gray-400">{children}</Slot>;
}

TextInputIcon.displayName = "TextInput.Icon";

export interface TextInputInputProps
  extends InputHTMLAttributes<HTMLInputElement> {}

function TextInputInput(props: TextInputInputProps) {
  return (
    <input
      className="flex-1 bg-transparent outline-none text-gray-100 text-xs placeholder:text-gray-400"
      {...props}
    />
  );
}

TextInputInput.displayName = "TextInput.Input";

export type TextInputProps = typeof TextInputRoot & {
  Input: typeof TextInputInput;
  Icon: typeof TextInputIcon;
};

export const TextInput = TextInputRoot as TextInputProps

TextInput.Icon = TextInputIcon
TextInput.Input = TextInputInput
