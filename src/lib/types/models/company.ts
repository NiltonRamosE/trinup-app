export interface Company {
  ruc: string; // RUC de la empresa
  razonSocial: string; // Razón social de la empresa
  pago: string|null; // Indicador de si desea pagar la suscripción
  sucursales: string; // Número de sucursales de la empresa
}
