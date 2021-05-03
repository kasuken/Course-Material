using Expenses.Data;
using ExpensesManager.Models;
using ExpensesManager.Services;
using System.Collections.Generic;
using System.Linq;

namespace ExpensesManager.Services
{
    public class ExpensesService : IExpensesService
    {
        public void AddExpense(Expense exp)
        {
            Data.Expenses.Add(exp);
        }

        public void DeleteExpense(int expId)
        {
            var expense = Data.Expenses.FirstOrDefault(n => n.Id == expId);
            if(expense != null)
            {
                Data.Expenses.Remove(expense);
            }
        }

        public List<Expense> GetAllExpenses() => Data.Expenses.ToList();

        public Expense GetExpenseById(int expId) => Data.Expenses.FirstOrDefault(n => n.Id == expId);

        public void UpdateExpense(int expId, Expense exp)
        {
            var expTrip = Data.Expenses.FirstOrDefault(n => n.Id == expId);

            if(expTrip != null)
            {
                expTrip.Name = exp.Name;
                expTrip.Description = exp.Description;
                expTrip.Date = exp.Date;
                expTrip.Amount = exp.Amount;
            }
        }
    }
}