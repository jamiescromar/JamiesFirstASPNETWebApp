using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace JamiesFirstASPNETWebApp.Models
{
    public class GradeCalculatorModel
    {
        //Data Validation
        [Required]

        [Range(0,100, ErrorMessage = "Enter a number between 0-100 for Assignments")]
        public int assignments { get; set; }

        [Range(0, 100, ErrorMessage = "Enter a number between 0-100 for Group Projects")]
        public int groupProjects { get; set; }

        [Range(0, 100, ErrorMessage = "Enter a number between 0-100 for Quizzes")]
        public int quizzes { get; set; }

        [Range(0, 100, ErrorMessage = "Enter a number between 0-100 for Exams")]
        public int exams { get; set; }

        [Range(0, 100, ErrorMessage = "Enter a number between 0-100 for Intex")]
        public int intex { get; set; }
        
    }
}
