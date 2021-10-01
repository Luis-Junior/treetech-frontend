export interface Toast {
    tipo: ToastType,
    texto: string,
    delay?: number
}
export enum ToastType{
    SUCESSO = 'success',
    PERIGO = 'danger',
    AVISO = 'warn'
  }