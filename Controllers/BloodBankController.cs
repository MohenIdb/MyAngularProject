using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

using MyAngularFinalProject.Data;
using MyAngularFinalProject.Models;
using Microsoft.EntityFrameworkCore;

namespace MyAngularFinalProject.Controllers
{
    [Route("/api/bloodBanks")]
    public class BloodBankController : Controller
    {
        private readonly MyDbContext context;

        public BloodBankController(MyDbContext _context)
        {
            this.context = _context;
        }

        [HttpGet]
        public async Task<IEnumerable<BloodBank>> GetBloodBanks()
        {
            var bldgrp = await context.BloodBanks.ToListAsync();
            return bldgrp;
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetBloodBank(int id)
        {
            var bloodBank = await context.BloodBanks.FindAsync(id);
            if (bloodBank == null)
            {
                return NotFound();
            }
            return Ok(bloodBank);
        }

        [HttpPost]
        public async Task<IActionResult> CreateBloodBank([FromBody] BloodBank bloodBank)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            context.BloodBanks.Add(bloodBank);
            await context.SaveChangesAsync();
            return Json(bloodBank);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateBloodBank([FromBody] BloodBank bloodBank, int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            var bldgrp = await context.BloodBanks.FindAsync(id);
            if (bldgrp != null)
            {
                bldgrp.BloodGroupName = bloodBank.BloodGroupName;
                bldgrp.Description = bloodBank.Description;
            }
            await context.SaveChangesAsync();
            return Ok(bldgrp);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteBloodBank(int id)
        {
            var bloodBank = await context.BloodBanks.FindAsync(id);
            if (bloodBank == null)
            {
                return NotFound();
            }
            context.Remove(bloodBank);
            await context.SaveChangesAsync();
            return Ok(id);
        }
    }
}
