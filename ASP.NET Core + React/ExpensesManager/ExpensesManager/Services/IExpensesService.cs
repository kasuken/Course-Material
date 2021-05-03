using ExpensesManager.Models;
using System.Collections.Generic;

namespace ExpensesManager.Services
{
    public interface IExpensesService
    {
        List<Expense> GetAllExpenses();
        Expense GetExpenseById(int expId);
        void UpdateExpense(int expId, Expense exp);
        void DeleteExpense(int expId);
        void AddExpense(Expense exp);
    }
}