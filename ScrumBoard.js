class ScrumBoard
	{
	constructor(container)
		{
		this.container = container;

		this.scrum_PendingColumn = [];
		this.scrum_DevelopmentColumn = [];
		this.scrum_ReadyForTestingColumn = [];
		this.scrum_DoneColumn = [];

		this.STRING_PENDING = "";
		this.STRING_DEVELOPMENT = "";
		this.STRING_READYFORTESTING = "";
		this.STRING_DONE = "";
		this.STRING_SHOWMORE = "";

		// GETTING THE USER LANGUAGE
		var userLanguage = window.navigator.userLanguage || window.navigator.language;

		// CHECKING THE USER LANGUAGE AND SETTINGS THE VALUES FOR THE LABELS
		if (userLanguage.substring(0,2)=="es")
			{
			this.STRING_PENDING = "TAREAS PENDIENTES";
			this.STRING_DEVELOPMENT = "EN DESARROLLO";
			this.STRING_READYFORTESTING = "LISTAS PARA PRUEBAS";
			this.STRING_DONE = "TERMINADAS";
			this.STRING_SHOWMORE = "Mostrar m&aacute;s";
			}
			else
			{
			this.STRING_PENDING = "PENDING TASKS";
			this.STRING_DEVELOPMENT = "IN DEVELOPMENT";
			this.STRING_READYFORTESTING = "READY FOR TESTING";
			this.STRING_DONE = "DONE";
			this.STRING_SHOWMORE = "Show more";
			}
		}

	// FUNCTION THAT WILL ADD THE TASKS TO THE FIRST COLUMN (PENDING)
	scrum_DataToColumn1(){var scrum_from=this.scrum_PendingColumn;var scrum_to="ScrumBoard_column_pending";var scrum_task_showmore="ScrumBoard_readmore ScrumBoard_showmore1";var scrum_task_hidden="ScrumBoard_task ScrumBoard_hidden1";var scrum_task_normal="ScrumBoard_task";var scrum_counter=-1;var tempRef=this;function loop(){if(scrum_counter<scrum_from.length-1){scrum_counter=scrum_counter+1;try{var finalClassName=scrum_task_normal;if(scrum_counter>=19){finalClassName = scrum_task_hidden;}document.getElementsByClassName(scrum_to)[0].innerHTML = document.getElementsByClassName(scrum_to)[0].innerHTML+"<div class='" + finalClassName + "'><div class='scrum_task_details'>"+scrum_from[scrum_counter][1]+"</div><div class='ScrumBoard_task_project'>"+scrum_from[scrum_counter][0]+"</div></div>";if(scrum_counter==19){document.getElementsByClassName(scrum_to)[0].innerHTML=document.getElementsByClassName(scrum_to)[0].innerHTML+"<div class='"+scrum_task_showmore+"' onclick='for(var i=0;i<document.getElementsByClassName(\""+scrum_task_hidden+"\").length;i++){document.getElementsByClassName(\""+scrum_task_hidden+"\")[i].style.display=\"block\";}document.getElementsByClassName(\""+scrum_task_showmore+"\")[0].style.display=\"none\";'>"+tempRef.STRING_SHOWMORE +"</div>";}}catch(err){}setTimeout(loop,20);}else{tempRef.scrum_DataToColumn2();}}loop();}

	// FUNCTION THAT WILL ADD THE TASKS TO THE SECOND COLUMN (IN DEVELOPMENT)
	scrum_DataToColumn2(){var scrum_from=this.scrum_DevelopmentColumn;var scrum_to="ScrumBoard_column_development";var scrum_task_showmore="ScrumBoard_readmore ScrumBoard_showmore2";var scrum_task_hidden="ScrumBoard_task ScrumBoard_hidden2";var scrum_task_normal="ScrumBoard_task";var scrum_counter=-1;var tempRef=this;function loop(){if(scrum_counter<scrum_from.length-1){scrum_counter=scrum_counter+1;try{var finalClassName=scrum_task_normal;if(scrum_counter>=19){finalClassName = scrum_task_hidden;}document.getElementsByClassName(scrum_to)[0].innerHTML = document.getElementsByClassName(scrum_to)[0].innerHTML+"<div class='" + finalClassName + "'><div class='scrum_task_details'>"+scrum_from[scrum_counter][1]+"</div><div class='ScrumBoard_task_project'>"+scrum_from[scrum_counter][0]+"</div></div>";if(scrum_counter==19){document.getElementsByClassName(scrum_to)[0].innerHTML=document.getElementsByClassName(scrum_to)[0].innerHTML+"<div class='"+scrum_task_showmore+"' onclick='for(var i=0;i<document.getElementsByClassName(\""+scrum_task_hidden+"\").length;i++){document.getElementsByClassName(\""+scrum_task_hidden+"\")[i].style.display=\"block\";}document.getElementsByClassName(\""+scrum_task_showmore+"\")[0].style.display=\"none\";'>"+tempRef.STRING_SHOWMORE +"</div>";}}catch(err){}setTimeout(loop,20);}else{tempRef.scrum_DataToColumn3();}}loop();}

	// FUNCTION THAT WILL ADD THE TASKS TO THE THIRTH COLUMN (READY FOR TESTING)
	scrum_DataToColumn3(){var scrum_from=this.scrum_ReadyForTestingColumn;var scrum_to="ScrumBoard_column_test";var scrum_task_showmore="ScrumBoard_readmore ScrumBoard_showmore3";var scrum_task_hidden="ScrumBoard_task ScrumBoard_hidden3";var scrum_task_normal="ScrumBoard_task";var scrum_counter=-1;var tempRef=this;function loop(){if(scrum_counter<scrum_from.length-1){scrum_counter=scrum_counter+1;try{var finalClassName=scrum_task_normal;if(scrum_counter>=19){finalClassName = scrum_task_hidden;}document.getElementsByClassName(scrum_to)[0].innerHTML = document.getElementsByClassName(scrum_to)[0].innerHTML+"<div class='" + finalClassName + "'><div class='scrum_task_details'>"+scrum_from[scrum_counter][1]+"</div><div class='ScrumBoard_task_project'>"+scrum_from[scrum_counter][0]+"</div></div>";if(scrum_counter==19){document.getElementsByClassName(scrum_to)[0].innerHTML=document.getElementsByClassName(scrum_to)[0].innerHTML+"<div class='"+scrum_task_showmore+"' onclick='for(var i=0;i<document.getElementsByClassName(\""+scrum_task_hidden+"\").length;i++){document.getElementsByClassName(\""+scrum_task_hidden+"\")[i].style.display=\"block\";}document.getElementsByClassName(\""+scrum_task_showmore+"\")[0].style.display=\"none\";'>"+tempRef.STRING_SHOWMORE +"</div>";}}catch(err){}setTimeout(loop,20);}else{tempRef.scrum_DataToColumn4();}}loop();}

	// FUNCTION THAT WILL ADD THE TASKS TO THE FOURTH COLUMN (DONE)
	scrum_DataToColumn4(){var scrum_from=this.scrum_DoneColumn;var scrum_to="ScrumBoard_column_done";var scrum_task_showmore="ScrumBoard_readmore ScrumBoard_showmore4";var scrum_task_hidden="ScrumBoard_task ScrumBoard_hidden4";var scrum_task_normal="ScrumBoard_task";var scrum_counter=-1;var tempRef=this;function loop(){if(scrum_counter<scrum_from.length-1){scrum_counter=scrum_counter+1;try{var finalClassName=scrum_task_normal;if(scrum_counter>=19){finalClassName = scrum_task_hidden;}document.getElementsByClassName(scrum_to)[0].innerHTML = document.getElementsByClassName(scrum_to)[0].innerHTML+"<div class='" + finalClassName + "'><div class='scrum_task_details'>"+scrum_from[scrum_counter][1]+"</div><div class='ScrumBoard_task_project'>"+scrum_from[scrum_counter][0]+"</div></div>";if(scrum_counter==19){document.getElementsByClassName(scrum_to)[0].innerHTML=document.getElementsByClassName(scrum_to)[0].innerHTML+"<div class='"+scrum_task_showmore+"' onclick='for(var i=0;i<document.getElementsByClassName(\""+scrum_task_hidden+"\").length;i++){document.getElementsByClassName(\""+scrum_task_hidden+"\")[i].style.display=\"block\";}document.getElementsByClassName(\""+scrum_task_showmore+"\")[0].style.display=\"none\";'>"+tempRef.STRING_SHOWMORE+"</div>";}}catch(err){}setTimeout(loop,20);}else{if (tempRef.runWhenDone!=null){tempRef.runWhenDone();}}}loop();}

	showBoard(runWhenDone = null)
		{
		// SETTING WHICH FUNCTION WILL BE CALLED WHEN THE BOARD IS FULLY RENDERED
		this.runWhenDone = runWhenDone;

		// SETTING THE SCRUM BOARD STYLE SHEET
		var ScrumBoardStyleRAW = `
			.ScrumBoard{width:100%;overflow-x:scroll;outline:none;scrollbar-width:none}
			.ScrumBoard *{text-align:left}
			.ScrumBoard::-webkit-scrollbar{display:none}
			.ScrumBoard_wrapper{float:left;width:1137px}
			.ScrumBoard_column{display:block;float:left;background-color:#ebecf0;border-radius:3px;width:272px;margin:5px 0 10px 10px;color:#172b4d;font-weight:bold;font-size:14px;font-family:-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Noto Sans, Ubuntu, Droid Sans, Helvetica Neue, sans-serif}
			.ScrumBoard_column_title{margin:7px;padding:5px}
			.ScrumBoard_task{float:left;background-color:white;margin-left:8px;width:241px;border-radius:3px;box-shadow:0 1px 2px rgba(9,30,66,.25);font-weight:normal;line-height:2;padding-left:7px;padding-right:7px;margin-bottom:10px}
			.ScrumBoard_task_details{float:left;width:243px;line-height:1.5;margin-top:5px}
			.ScrumBoard_task_details a{text-decoration:none;color:#3a76b1;outline:none}
			.ScrumBoard_task_project{float:left;color:gray;margin-bottom:3px}
			.ScrumBoard_readmore{float:left;display:inline-block;width:100%;text-align:center;padding-top:5px;padding-bottom:5px;margin-bottom:10px;cursor:pointer}
			.ScrumBoard_hidden1{display:none}
			.ScrumBoard_hidden2{display:none}
			.ScrumBoard_hidden3{display:none}
			.ScrumBoard_hidden4{display:none}

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
		document.getElementsByClassName("ScrumBoard_column_title")[2].innerHTML = this.STRING_READYFORTESTING + " (" + this.scrum_ReadyForTestingColumn.length  + ")";
		document.getElementsByClassName("ScrumBoard_column_title")[3].innerHTML = this.STRING_DONE + " (" + this.scrum_DoneColumn.length  + ")";

		// ADDING THE VALUE FOR THE FIRST COLUMN
		this.scrum_DataToColumn1();
		}

	addToPending(a,b)
		{
		this.scrum_PendingColumn.push([a,b]);
		}

	addToInDevelopment(a,b)
		{
		this.scrum_DevelopmentColumn.push([a,b]);
		}

	addToReadyForTesting(a,b)
		{
		this.scrum_ReadyForTestingColumn.push([a,b]);
		}

	addToDone(a,b)
		{
		this.scrum_DoneColumn.push([a,b]);
		}
	}