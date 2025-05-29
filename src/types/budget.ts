export interface Budget {
  id?: number;
  name: string;
  email: string;
  message: string;
  created_at?: string;
  status?: BudgetStatus;
}

export type BudgetStatus = "pending" | "contacted" | "completed";

export interface BudgetFormData {
  name: string;
  email: string;
  message: string;
}
