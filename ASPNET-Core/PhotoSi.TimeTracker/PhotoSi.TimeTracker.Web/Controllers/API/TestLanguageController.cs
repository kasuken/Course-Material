using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Localization;

namespace PhotoSi.TimeTracker.Web.Controllers.API
{
    [Route("api/[controller]")]
    [ApiController]
    public class TestLanguageController : ControllerBase
    {
        private readonly IStringLocalizer<TestLanguageController> _localizer;

        public TestLanguageController(IStringLocalizer<TestLanguageController> localizer)
        {
            _localizer = localizer;
        }

        public IActionResult Get()
        {
            var saluti = "ciao mondo";

            var salutiLocalizer = _localizer["greetings"].Value;
            var salutiLocalizerWithParameters = _localizer["greetingsWithParameters", saluti].Value;

            return Ok(salutiLocalizer);
            
        }
    }
}
