﻿$("#submitButton").click(function () {
        var assignments = $("#assignments").val();
        var groupProject = $("#groupProjects").val();
        var quizzes = $("#quizzes").val();
        var exams = $("#exams").val();
        var intex = $("#intex").val();

        var assignWeight = .5;
        var groupProjectWeight = .1;
        var quizWeight = .1;
        var examWeight = .2;
        var intexWeight = .1;

        var assignFinal = assignments * assignWeight;
        var groupFinal = groupProject * groupProjectWeight;
        var quizFinal = quizzes * quizWeight;
        var examFinal = exams * examWeight;
        var intexFinal = intex * intexWeight;

        var finalGrade = assignFinal + groupFinal + quizFinal + examFinal + intexFinal;
        var letterGrade = "";

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
        alert("You ended the class with " + finalGrade + "% and recieved a " + letterGrade);

    });