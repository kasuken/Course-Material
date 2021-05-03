using ExpensesManager.Models;
using System;
using System.Collections.Generic;

namespace Expenses.Data
{
    public static class Data
    {
        public static List<Expense> Expenses => allExpenses;
        static List<Expense> allExpenses = new List<Expense>()
        {
        new Expense()
        {
            Id=1,
            Name="Skateboard",
            Description="New longboard for fun.",
            Date = DateTime.Now.AddDays(-7),
            Amount = 10
        },
        new Expense()
        {
            Id=2,
            Name="Rollerblade",
            Description="Just an expense for my soul",
            Date = DateTime.Now.AddDays(-6),
            Amount = 15
        },
        new Expense()
        {
            Id=3,
            Name="Logitech c920",
            Description="A new webcam for my Twitch live coding",
            Date = DateTime.Now.AddDays(-5),
            Amount = 20
        },
        new Expense()
        {
            Id=4,
            Name="Elgato Light",
            Description="Second hand elgato light to look much better on video",
            Date = DateTime.Now.AddDays(-4),
            Amount = 25
        },
        new Expense()
        {
            Id=5,
            Name="Asus Rog 49",
            Description="The best wide screen for gaming and working",
            Date = DateTime.Now.AddDays(-3),
            Amount = 30
        },
        new Expense()
        {
            Id=7,
            Name="Logitech MX Master",
            Description="The best mouse ever",
            Date = DateTime.Now.AddDays(-2),
            Amount = 35
        }
    };

    }
}