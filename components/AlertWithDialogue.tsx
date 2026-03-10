// components/LogoutButton.tsx
"use client"
import { Button } from "@/components/ui/button"

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

interface AlertWithDiagProps {
    buttonText: string
    buttonVariant: "default" | "outline" | "destructive" | "ghost" | "link" | "secondary"
    title?: string
    message?: string
    cancelText?: string 
    confirmText: string
    cancelFunction?: ()=> void;
    confirmFunction: ()=> void;
}

export default function AlertWithDialogue({
    buttonText,title, message,cancelText,confirmText, cancelFunction, confirmFunction, buttonVariant
}: AlertWithDiagProps) {
  return (
    <div>
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <Button variant={buttonVariant ?? "default"}>
                    {buttonText}
                </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                {title && <AlertDialogTitle>{title}</AlertDialogTitle>}
                {message && <AlertDialogDescription>{message}</AlertDialogDescription>}
                </AlertDialogHeader>
                <AlertDialogFooter>
                {cancelText && <AlertDialogCancel onClick={cancelFunction}>{cancelText}</AlertDialogCancel>}
                <AlertDialogAction onClick={confirmFunction}>{confirmText}</AlertDialogAction>
            </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog> 
    </div>
  )
}
