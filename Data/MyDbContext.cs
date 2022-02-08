using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

using MyAngularFinalProject.Models;
using Microsoft.EntityFrameworkCore;

namespace MyAngularFinalProject.Data
{
    public class MyDbContext:DbContext
    {
        public MyDbContext(DbContextOptions<MyDbContext> options) :base(options)
        {

        }

        public DbSet<BloodBank> BloodBanks { get; set; }
        public DbSet<Patient> Patients { get; set; }
    }
}
