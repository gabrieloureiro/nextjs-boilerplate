/* eslint-disable @typescript-eslint/ban-types */
import { ToastMessage } from '@/hooks/useToast'

export interface ToastProps {
  message: ToastMessage
  style: object
}

export interface ContainerProps {
  type?: 'success' | 'error' | 'info'
}
