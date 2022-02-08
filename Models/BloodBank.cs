using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

using System.ComponentModel.DataAnnotations;

namespace MyAngularFinalProject.Models
{
    public class BloodBank
    {
        [Key]
        public int BloodGroupID { get; set; }
        public string BloodGroupName { get; set; }
        public string Description { get; set; }

        public ICollection<Patient> Patients { get; set; }
    }
}
