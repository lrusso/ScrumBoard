class ScrumBoard
	{
	constructor(container)
		{
		this.container = container;

		this.columns = 4;
		this.columnsProccesed = 0;

		this.addingDelay = 20;
		this.maxVisibleTasksPerColumn = 20;

		this.scrum_PendingColumn = [];
		this.scrum_DevelopmentColumn = [];
		this.scrum_TestColumn = [];
		this.scrum_DoneColumn = [];

		this.STRING_PENDING = "";
		this.STRING_DEVELOPMENT = "";
		this.STRING_TEST = "";
		this.STRING_DONE = "";
		this.STRING_SHOWMORE = "";

		// GETTING THE USER LANGUAGE
		var userLanguage = window.navigator.userLanguage || window.navigator.language;

		// CHECKING THE USER LANGUAGE AND SETTINGS THE VALUES FOR THE LABELS
		if (userLanguage.substring(0,2)=="es")
			{
			this.STRING_PENDING = "TAREAS PENDIENTES";
			this.STRING_DEVELOPMENT = "EN DESARROLLO";
			this.STRING_TEST = "PARA PRUEBAS";
			this.STRING_DONE = "FINALIZADAS";
			this.STRING_SHOWMORE = "Mostrar m&aacute;s";
			}
			else
			{
			this.STRING_PENDING = "PENDING TASKS";
			this.STRING_DEVELOPMENT = "IN DEVELOPMENT";
			this.STRING_TEST = "FOR TESTING";
			this.STRING_DONE = "DONE";
			this.STRING_SHOWMORE = "Show more";
			}
		}

	showBoard(runWhenDone = null)
		{
		// SETTING WHICH FUNCTION WILL BE CALLED WHEN THE BOARD IS FULLY RENDERED
		this.runWhenDone = runWhenDone;

		// SETTING THE SCRUM BOARD STYLE SHEET
		var ScrumBoardStyleRAW = `
			.ScrumBoard{width:100%;outline:none;scrollbar-width:none}
			.ScrumBoard *{text-align:left}
			.ScrumBoard::-webkit-scrollbar{display:none}
			.ScrumBoard_wrapper{float:left;width:1137px}
			.ScrumBoard_column{display:block;float:left;background-color:#ebecf0;border-radius:3px;width:272px;margin:10px 0 10px 10px;color:#172b4d;font-weight:bold;font-size:14px;font-family:-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Noto Sans, Ubuntu, Droid Sans, Helvetica Neue, sans-serif}
			.ScrumBoard_column_title{margin:7px;padding:5px}
			.ScrumBoard_task{float:left;background-color:white;margin-left:8px;width:241px;border-radius:3px;box-shadow:0 1px 2px rgba(9,30,66,.25);font-weight:normal;line-height:2;padding-left:7px;padding-right:7px;margin-bottom:10px}
			.ScrumBoard_task_details{float:left;width:243px;line-height:1.5;margin-top:5px}
			.ScrumBoard_task_details a{text-decoration:none;color:#3a76b1;outline:none}
			.ScrumBoard_task_project{float:left;color:gray;margin-bottom:3px}
			.ScrumBoard_readmore{float:left;display:inline-block;width:100%;text-align:center;padding-top:5px;padding-bottom:5px;margin-bottom:10px;cursor:pointer}
			.ScrumBoard_hidden0{display:none}
			.ScrumBoard_hidden1{display:none}
			.ScrumBoard_hidden2{display:none}
			.ScrumBoard_hidden3{display:none}

			@media screen and (min-width:1920px)
				{
				.ScrumBoard_wrapper{width:1837px}
				.ScrumBoard_column{width:382px}
				.ScrumBoard_task{width:351px}
				.ScrumBoard_task_details{width:353px}
				};
			`

		// CREATING THE SCRUM BOARD STYLE SHEET
		var ScrumBoardStyle = document.createElement("style");
		ScrumBoardStyle.innerText = ScrumBoardStyleRAW;

		// GETTING THE DOCUMENT HEAD
		var headTag = document.head || document.getElementsByTagName("head")[0];

		// ADDING THE SCRUM BOARD STYLE SHEET TO THE DOCUMENT HEAD
		headTag.appendChild(ScrumBoardStyle);

		// INSERTING THE SCRUM BOARD HTML CONTENT INTO THE CONTAINER
		document.getElementById(this.container).innerHTML = "<div class=\"ScrumBoard\"><div class=\"ScrumBoard_wrapper\"><div class=\"ScrumBoard_column\"><div class=\"ScrumBoard_column_title\"></div><div class=\"ScrumBoard_column_pending\"></div></div><div class=\"ScrumBoard_column\"><div class=\"ScrumBoard_column_title\"></div><div class=\"ScrumBoard_column_development\"></div></div><div class=\"ScrumBoard_column\"><div class=\"ScrumBoard_column_title\"></div><div class=\"ScrumBoard_column_test\"></div></div><div class=\"ScrumBoard_column\"><div class=\"ScrumBoard_column_title\"></div><div class=\"ScrumBoard_column_done\"></div></div></div></div>";

		// UPDATING THE SCRUM BOARD LABELS
		document.getElementsByClassName("ScrumBoard_column_title")[0].innerHTML = this.STRING_PENDING + " (" + this.scrum_PendingColumn.length  + ")";
		document.getElementsByClassName("ScrumBoard_column_title")[1].innerHTML = this.STRING_DEVELOPMENT + " (" + this.scrum_DevelopmentColumn.length  + ")";
		document.getElementsByClassName("ScrumBoard_column_title")[2].innerHTML = this.STRING_TEST + " (" + this.scrum_TestColumn.length  + ")";
		document.getElementsByClassName("ScrumBoard_column_title")[3].innerHTML = this.STRING_DONE + " (" + this.scrum_DoneColumn.length  + ")";

		// ADDING THE TASKS TO THE COLUMNS
		this.scrum_AddDataToColumn(this.scrum_PendingColumn, "ScrumBoard_column_pending", 0);
		this.scrum_AddDataToColumn(this.scrum_DevelopmentColumn, "ScrumBoard_column_development", 1);
		this.scrum_AddDataToColumn(this.scrum_TestColumn, "ScrumBoard_column_test", 2);
		this.scrum_AddDataToColumn(this.scrum_DoneColumn, "ScrumBoard_column_done", 3);
		}

	// FUNCTION THAT WILL ADD THE TASKS TO THE SELECTED COLUMN
	scrum_AddDataToColumn(scrum_from, scrum_to, column_number)
		{
		var scrum_task_showmore = "ScrumBoard_readmore ScrumBoard_showmore" + column_number;
		var scrum_task_hidden = "ScrumBoard_task ScrumBoard_hidden" + column_number;
		var scrum_task_normal = "ScrumBoard_task";
		var scrum_task_counter = -1;
		var tempRef = this;

		function loop(scrum_from, scrum_to, scrum_task_showmore, scrum_task_hidden, scrum_task_normal, scrum_task_counter, tempRef)
			{
			// CHECKING IF THERE IS A TASK TO ADD
			if (scrum_task_counter < scrum_from.length-1)
				{
				// UPDATING THE TASK COUNTER
				scrum_task_counter = scrum_task_counter + 1;

				try
					{
					// CREATING A VARIABLE WITH THE CLASSNAME THAT WILL BE USED FOR THE TASK
					var finalClassName = scrum_task_normal;

					// CHECKING IF THE TASK MUST BE HIDDEN
					if (scrum_task_counter>=tempRef.maxVisibleTasksPerColumn)
						{
						// HIDING THE TASK
						finalClassName = scrum_task_hidden;
						}

					// ADDING THE TASK
					document.getElementsByClassName(scrum_to)[0].innerHTML = document.getElementsByClassName(scrum_to)[0].innerHTML + "<div class='" + finalClassName + "'><div class='scrum_task_details'>" + scrum_from[scrum_task_counter][1] + "</div><div class='ScrumBoard_task_project'>" + scrum_from[scrum_task_counter][0] + "</div></div>";

					// CHECKING IF THE 'SHOW MORE' ITEM MUST BE ADDED
					if(scrum_task_counter==tempRef.maxVisibleTasksPerColumn)
						{
						// ADDING THE 'SHOW MORE' ITEM
						document.getElementsByClassName(scrum_to)[0].innerHTML = document.getElementsByClassName(scrum_to)[0].innerHTML + "<div class='" + scrum_task_showmore + "' onclick='for(var i=0;i<document.getElementsByClassName(\"" + scrum_task_hidden + "\").length;i++){document.getElementsByClassName(\"" + scrum_task_hidden + "\")[i].style.display=\"block\";}document.getElementsByClassName(\"" + scrum_task_showmore + "\")[0].style.display=\"none\";'>" + tempRef.STRING_SHOWMORE +"</div>";
						}
					}
				catch(err)
					{
					}

				// SETTING A DELAY TO ADD THE NEXT TASK
				setTimeout(function()
					{
					// CALLING THE LOOP FUNCTION TO ADD A TASK WITH THE SAME VALUES AS THE FIRST TIME BUT WITH THE SCRUM TASK COUNTER UPDATED
					loop(scrum_from,scrum_to,scrum_task_showmore,scrum_task_hidden,scrum_task_normal,scrum_task_counter,tempRef);
					}, tempRef.addingDelay);
				}
				else
				{
				// UPDATING THE COLUMNS PROCCESED COUNTER
				tempRef.columnsProccesed = tempRef.columnsProccesed + 1;

				// CHECKING IF ALL THE COLUMNS ARE RENDERED AND IF IT IS TIME TO RUN A FUNCTION (IF ANY)
				tempRef.runWhenDoneChecking();
				}
			}

		// CALLING THE LOOP FUNCTION TO ADD THE FIRST TASK
		loop(scrum_from,scrum_to,scrum_task_showmore,scrum_task_hidden,scrum_task_normal,scrum_task_counter,this);
		}

	runWhenDoneChecking()
		{
		// CHECKING IF THERE IS A FUNCTION TO BE CALLED WHEN ALL THE COLUMNS ARE RENDERED
		if (this.runWhenDone!=null)
			{
			// CHECKING IF ALL THE COLUMNS WERE RENDERED
			if (this.columns == this.columnsProccesed)
				{
				// EXEUCTING THE FUNCTION
				this.runWhenDone();
				}
			}
		}

	addToPending(a,b)
		{
		this.scrum_PendingColumn.push([a,b]);
		}

	addToDevelopment(a,b)
		{
		this.scrum_DevelopmentColumn.push([a,b]);
		}

	addToTest(a,b)
		{
		this.scrum_TestColumn.push([a,b]);
		}

	addToDone(a,b)
		{
		this.scrum_DoneColumn.push([a,b]);
		}
	}