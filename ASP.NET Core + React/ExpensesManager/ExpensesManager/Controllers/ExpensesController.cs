using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ExpensesManager.Models;
using ExpensesManager.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ExpensesManager.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ExpensesController : ControllerBase
    {
        private readonly IExpensesService _service;
        public ExpensesController(IExpensesService service)
        {
            this._service = service;
        }

        [HttpGet("[action]")]
        public IActionResult GetExpenses()
        {
            try
            {
                var allTrips = _service.GetAllExpenses();
                return Ok(allTrips);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpGet("SingleExpense/{id}")]
        public IActionResult GetTripById(int id)
        {
            var trip = _service.GetExpenseById(id);
            return Ok(trip);
        }

        [HttpPost("AddExpense")]
        public IActionResult AddTrip([FromBody] Expense exp)
        {
            if (exp != null)
            {
                _service.AddExpense(exp);
            }
            return Ok();
        }

        [HttpPut("UpdateExpense/{id}")]
        public IActionResult UpdateTrip(int id, [FromBody] Expense exp)
        {
            _service.UpdateExpense(id, exp);
            return Ok(exp);
        }

        [HttpDelete("DeleteExpense/{id}")]
        public IActionResult DeleteTrip(int id)
        {
            _service.DeleteExpense(id);
            return Ok();
        }

    }
}
