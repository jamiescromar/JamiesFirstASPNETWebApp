//Function that will activate when the button is submitted
$("#submitButton").click(function () {
        //Get the elements and values from the inputs
        var assignments = $("#assignments").val();
        var groupProject = $("#groupProjects").val();
        var quizzes = $("#quizzes").val();
        var exams = $("#exams").val();
        var intex = $("#intex").val();

        //Assign assignment weights based off the syllabus
        var assignWeight = .5;
        var groupProjectWeight = .1;
        var quizWeight = .1;
        var examWeight = .2;
        var intexWeight = .1;

        //Get the weighted percentage for each type of grade in 413
        var assignFinal = assignments * assignWeight;
        var groupFinal = groupProject * groupProjectWeight;
        var quizFinal = quizzes * quizWeight;
        var examFinal = exams * examWeight;
        var intexFinal = intex * intexWeight;

        //Add up the wighted percentage for each part of the class
        var finalGrade = assignFinal + groupFinal + quizFinal + examFinal + intexFinal;
        //create letter grade variable 
        var letterGrade = "";

        //if statements to determine what the letter grade is given the percentage that a student will have in a course
        if (finalGrade >= 94) {
            letterGrade = "A";
        }
        else if (finalGrade >= 90) {
            letterGrade = "A-";
        }
        else if (finalGrade >= 87) {
            letterGrade = "B+";
        }
        else if (finalGrade >= 84) {
            letterGrade = "B";
        }
        else if (finalGrade >= 80) {
            letterGrade = "B-";
        }
        else if (finalGrade >= 77) {
            letterGrade = "C+";
        }
        else if (finalGrade >= 74) {
            letterGrade = "C";
        }
        else if (finalGrade >= 70) {
            letterGrade = "C-";
        }
        else if (finalGrade >= 67) {
            letterGrade = "D+";
        }
        else if (finalGrade >= 64) {
            letterGrade = "D";
        }
        else if (finalGrade >= 60) {
            letterGrade = "D-";
        }
        else {
            letterGrade = "E";
        }

        //Create an alert that will show the user what the final grade percentage is and the letter grade that they received
        alert("You ended the class with " + finalGrade + "% and recieved a " + letterGrade);

    });