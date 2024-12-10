export interface Empresa {
  ruc: string; // RUC de la empresa
  razonSocial: string; // Razón social de la empresa
  pago: "si" | "no"; // Indicador de si desea pagar la suscripción
  sucursales: string; // Número de sucursales de la empresa
}
