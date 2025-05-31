import { supabase } from "../lib/supabase";
import { PostgrestError } from "@supabase/supabase-js";
import { Budget } from "../lib/supabase";

export class BudgetError extends Error {
  originalError: PostgrestError | null | unknown;

  constructor(message: string, originalError: PostgrestError | null | unknown = null) {
    super(message);
    this.name = "BudgetError";
    this.originalError = originalError;
  }
}

type CreateBudgetData = {
  name: string;
  email: string;
  message: string;
};

type UpdateBudgetStatusData = {
  id: number;
  status: Budget["status"];
};

export const budgetRepository = {
  async create(data: CreateBudgetData) {
    try {
      if (!data.name?.trim() || !data.email?.trim() || !data.message?.trim()) {
        return {
          data: null,
          error: new BudgetError("Todos os campos são obrigatórios."),
        };
      }

      const { data: budgetData, error: supabaseError } = await supabase
        .from("budgets")
        .insert({
          name: data.name.trim(),
          email: data.email.trim(),
          message: data.message.trim(),
        })
        .select()
        .single();

      if (supabaseError) {
        console.error("[BudgetRepository] Supabase error:", supabaseError);
        throw new BudgetError(
          supabaseError.message || "Erro ao salvar orçamento. Tente novamente.",
          supabaseError
        );
      }

      return {
        data: budgetData,
        error: null,
      };
    } catch (error) {
      console.error("[BudgetRepository] Error creating budget:", error);
      return {
        data: null,
        error:
          error instanceof BudgetError
            ? error
            : new BudgetError(
                "Erro inesperado ao salvar orçamento. Por favor, tente novamente.",
                error
              ),
      };
    }
  },

  async updateStatus({ id, status }: UpdateBudgetStatusData) {
    try {
      if (!id || !status) {
        return {
          data: null,
          error: new BudgetError("ID e status são obrigatórios."),
        };
      }

      const { data: budgetData, error: supabaseError } = await supabase
        .from("budgets")
        .update({ status })
        .eq("id", id)
        .select()
        .single();

      if (supabaseError) {
        console.error("[BudgetRepository] Supabase error:", supabaseError);
        throw new BudgetError(
          supabaseError.message || "Erro ao atualizar status. Tente novamente.",
          supabaseError
        );
      }

      return {
        data: budgetData,
        error: null,
      };
    } catch (error) {
      console.error("[BudgetRepository] Error updating budget status:", error);
      return {
        data: null,
        error:
          error instanceof BudgetError
            ? error
            : new BudgetError(
                "Erro inesperado ao atualizar status. Por favor, tente novamente.",
                error
              ),
      };
    }
  },

  async list() {
    try {
      const { data: budgets, error: supabaseError } = await supabase
        .from("budgets")
        .select("*")
        .order("created_at", { ascending: false });

      if (supabaseError) {
        console.error("[BudgetRepository] Supabase error:", supabaseError);
        throw new BudgetError(
          supabaseError.message || "Erro ao buscar orçamentos. Tente novamente.",
          supabaseError
        );
      }

      return {
        data: budgets,
        error: null,
      };
    } catch (error) {
      console.error("[BudgetRepository] Error listing budgets:", error);
      return {
        data: null,
        error:
          error instanceof BudgetError
            ? error
            : new BudgetError(
                "Erro inesperado ao buscar orçamentos. Por favor, tente novamente.",
                error
              ),
      };
    }
  },
};
