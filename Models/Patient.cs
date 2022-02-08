using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

using System.ComponentModel.DataAnnotations;

namespace MyAngularFinalProject.Models
{
    public class Patient
    {
        [Key]
        public int PatientID { get; set; }
        public string PatientName { get; set; }
        public DateTime DOB { get; set; }
        public bool IsActive { get; set; }

        public int BloodGroupID { get; set; }
        public virtual BloodBank BloodBank { get; set; }
    }
}
