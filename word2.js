const questions = [
   
    {
        question: "What is the shortcut key for “Superscript” the selected text?",
        a: "Ctrl + =",
        b: "Ctrl + –",
        c: "Ctrl + Shift + =",
        d: "Ctrl + Shift + –"
    },
    {
        question: "What is the shortcut key to Close Active Document in Microsoft Word?",
        a: "Ctrl + F4",
        b: "Shift + F4",
        c: "Ctrl + Shift + F4",
        d: "None of above"
    },
    {
        question: "What is the shortcut key to show font dialog box?",
        a: "Ctrl + D",
        b: "Ctrl + Shift + F",
        c: "Ctrl + Shift + P",
        d: "All of the above"
    },
    {
        question: "How to remove all character formats?",
        a: "Shift + Spacebar",
        b: "Shift + Enter",
        c: "Ctrl + Spacebar",
        d: "Ctrl + Enter"
    },
    {
        question: "What is the shortcut key to “Undo” the last action in a document?",
        a: "Ctrl + X",
        b: "Ctrl + Y",
        c: "Ctrl + Z",
        d: "None of above"
    },
    {
        question: "Which key do you press to force a page break?",
        a: "CTRL+ALT",
        b: "CTRL+ break",
        c: "CTRL+ Enter",
        d: "none of the above"
    },
    {
        question: "To increase a paragraph indent, use the _____ shortcut keys.",
        a: "ctrl+l",
        b: "ctrl+e",
        c: "ctrl+1",
        d: "ctrl+m"
    },
    {
        question: "To move to the end of the document, press the _____ key(s).",
        a: "down arrow",
        b: "end",
        c: "ctrl+down arrow",
        d: "ctrl+end"
    },
    {
        question: "Which key is used to select all the text in the document?",
        a: "Ctrl+T",
        b: "Ctrl+A",
        c: "Ctrl+F",
        d: "Ctrl+N"
    },
    {
        question: "To undo the last work, press …..",
        a: "Ctrl+U",
        b: "Ctrl+Y",
        c: "Ctrl+Z",
        d: "Ctrl+W"
    },
    {
        question: "The scroll box on the vertical scroll bar indicates the _____.",
        a: "position of the insertion point from the top of the page",
        b: "distance of the insertion point from the left margin",
        c: "current relative location of the document portion displayed in the window",
        d: "rank of the word in which the insertion point is found"
    },
    {
        question: "Headers and footers can include text and graphics, as well as the _____.",
        a: "current date",
        b: "page number",
        c: "current time",
        d: "all of the above"
    },
    {
        question: "Text boundary can be displayed or hidden from",
        a: "Auto text option from Insert menu",
        b: "Options from Tools menu",
        c: "Customize from Tools menu",
        d: "All of above"
    },
    {
        question: "_____ are types of changes that occur when text has been omitted from a document and must be inserted later.",
        a: "Copy",
        b: "Paste",
        c: "Cut",
        d: "Paste Special"
    },
    {
        question: "Which would you choose to move selected text from one place to another?",
        a: "Move and Paste",
        b: "Copy and Paste",
        c: "Cut and Paste",
        d: "Delete and Paste"
    },
    {
        question: "Ctrl + X",
        a: "Close Document",
        b: "Close Word Application",
        c: "Cut the Selected Contents",
        d: "Copy the Selected Contents"
    },
    {
        question: "Which is not a data source component?",
        a: "mail merge toolbar",
        b: "header row",
        c: "data fields",
        d: "data records"
    },
    {
        question: "In Word, the mailing list is known as the ____________.",
        a: "data sheet",
        b: "source",
        c: "data source",
        d: "sheet"
    },
    {
        question: "On the horizontal ruler, an upside down T indicates a _____ tab stop.",
        a: "left-aligned",
        b: "right-aligned",
        c: "decimal-aligned",
        d: "centered"
    },
    {
        question: "To erase a character to the right of the insertion point, press the _____ key.",
        a: "cancel",
        b: "backspace",
        c: "delete",
        d: "either b or c"
    },
    {
        question: "Ctrl + D",
        a: "Delete Dialog Box",
        b: "Font Dialog Box",
        c: "Delete All",
        d: "Do nothing"
    },
    {
        question: "Ctrl + Y",
        a: "Undo the last Action",
        b: "Repeat the last Action",
        c: "Delete the last page",
        d: "Delete the first page"
    },
    {
        question: "“Ctrl + Delete” is used to",
        a: "Delete the word just after the cursor",
        b: "Delete the word just before the cursor",
        c: "Delete the single letter just after the cursor",
        d: "Delete the single letter just before the cursor"
    },
    {
        question: "“Ctrl + Backspace” is used to",
        a: "Delete the single letter just before the cursor",
        b: "Delete the single letter just after the cursor",
        c: "Delete the word just before the cursor",
        d: "Delete the word just after the cursor"
    },
    {
        question: "Auto text and Auto correct are ___________ tools.",
        a: "styling",
        b: "editing",
        c: "designing",
        d: "none of the above"
    },
    {
        question: "In normal view, automatic page breaks _____.",
        a: "do not display",
        b: "display on the screen as a single dotted horizontal line",
        c: "display on the screen above the header and beneath the footer",
        d: "display on the screen as a line separated by the words Page Break"
    },
    {
        question: "What is the extension of Word files?",
        a: "FIL",
        b: "DOT",
        c: "DOC",
        d: "TXT"
    },
    {
        question: "To autofit the width of column",
        a: "Double click the right border of column",
        b: "Double click the left border of column",
        c: "Double click the column header",
        d: "All of above"
    },
    {
        question: "To open Columns dialog box quickly",
        a: "double click on the left margin area of ruler",
        b: "double click the space between area on ruler",
        c: "double click the right margin in ruler",
        d: "All of above"
    },
    {
        question: "To cancel a job that is printing or one that is waiting to be printed _____.",
        a: "click the Print button on the Standard toolbar",
        b: "click the printer icon on the taskbar",
        c: "double-click the Print button on the Standard toolbar",
        d: "double-click the printer icon on the taskbar"
    },
    {
        question: "Which of the following enables you to make multiple changes in a document at once?",
        a: "find command",
        b: "Replace command",
        c: "Drag and Drop",
        d: "copy command"
    },
    {
        question: "Which of the following is best for quick copy operation?",
        a: "Copy and Paste",
        b: "Windows Clipboard",
        c: "Drag and Drop",
        d: "Auto Text"
    },
    {
        question: "Which of the following operations moves text from clipboard?",
        a: "Copy",
        b: "Paste",
        c: "Drag and Drop",
        d: "Cut"
    },
    {
        question: "Which of the following operations moves text from clipboard?",
        a: "Copy",
        b: "Paste",
        c: "Drag and Drop",
        d: "Cut"
    },
    {
        question: "To select a group of words, _____.",
        a: "click the Group button on the Formatting toolbar",
        b: "double-click anywhere within the group to be selected",
        c: "drag the mouse pointer through the characters to be selected",
        d: "right-click the first and last characters of the group to be selected"
    },
    {
        question: "On which toolbar can you find Format Painter tool?",
        a: "Standard toolbar",
        b: "Formatting toolbar",
        c: "Drawing Toolbar",
        d: "Picture Toolbar"
    },
    {
        question: "What must be used to control the layering of objects?",
        a: "formatting toolbar",
        b: "picture toolbar",
        c: "drawing toolbar",
        d: "image toolbar"
    },
    {
        question: "Where can you find the Draw Table tool button?",
        a: "Standard toolbar",
        b: "Formatting toolbar",
        c: "Drawing toolbar",
        d: "Tables and Formatting toolbar"
    },
    {
        question: "Which toolbar has crop button?",
        a: "Standard toolbar",
        b: "Formatting toolbar",
        c: "Drawing toolbar",
        d: "Picture Toolbar"
    },
    {
        question: "Which of the following is graphics solution for Word Processors?",
        a: "Clipart",
        b: "WordArt",
        c: "Drop Cap",
        d: "All of above"
    },

    {
        question: "Which of the following is not of the merge process?",
        a: "Sort the data source records",
        b: "Format a main document",
        c: "Edit a data source",
        d: "Merge the two files to print or create a new document"
    },
    {
        question: "What would you do when you want to update the data in an embedded worksheet range?",
        a: "double click the worksheet range object",
        b: "right click worksheet range object & choose format object",
        c: "edit the data in the destination document",
        d: "edit the data in the source document."
    },
    {
        question: "Which command is used to establish a link between a source document and a destination document?",
        a: "Tools, Link, Documents",
        b: "Tools, Link",
        c: "Edit, Link",
        d: "Edit, Paste Special"
    },
    {
        question: "To select multiple cells, rows, or columns in a table that are not adjacent to one another, select the first cell and then hold down the _____ key while selecting the next cell, row, or column.",
        a: "alt",
        b: "shift",
        c: "enter",
        d: "ctrl"
    },
    {
        question: "The paragraph mark (¶) is a formatting mark that indicates where the _____ was pressed.",
        a: "tab key",
        b: "spacebar",
        c: "enter key",
        d: "shift key"
    },
    {
        question: "Which of the following option in File pull down menu is used to close a MS Word document?",
        a: "Quit",
        b: "Close",
        c: "Exit",
        d: "New"
    },
    {
        question: "Which keystroke is used for updating a field?",
        a: "F6",
        b: "F9",
        c: "F11",
        d: "F12"
    },
    {
        question: "Pressing the _____ key instructs Word to replace an AutoText entry name with the stored AutoText entry.",
        a: "f1",
        b: "f2",
        c: "f3",
        d: "f4"
    },
    {
        question: "Which of the following function key activates the speller?",
        a: "F5",
        b: "F7",
        c: "F9",
        d: "Shift + F7"
    },
    {
        question: "Which simplifies the process of formatting text if the same formatting is required in more than one location",
        a: "Auto Text",
        b: "Format Painter",
        c: "Font dialog box",
        d: "None of the above"
    },
    {
        question: "Which simplifies the process of formatting text if the same formatting is required in more than one location?",
        a: "Auto Text",
        b: "Format Painter",
        c: "Font dialog box",
        d: "None of the above"
    },
    {
        question: "There can be many ways to insert page number in a document. Which of the following lets you insert page number",
        a: "Page number from Insert menu",
        b: "Page Setup from file menu",
        c: "Footnote from Insert menu",
        d: "Both a & c"
    },
    {
        question: "The MLA style specifies that a superscript be used for a note reference mark to signal an explanatory note exists either at the bottom of the page as a(n) _____.",
        a: "footnote or at the end of the document as a startnote",
        b: "headnote or at the end of the document as an endnote",
        c: "footnote or at the end of the document as an endnote",
        d: "headnote or at the end of the document as a startnote"
    },
    {
        question: "If you need to change the typeface of a document, which menu will you choose?",
        a: "Edit",
        b: "View",
        c: "Format",
        d: "Tools"
    },
    {
        question: "Although it is not shown in normal view, to view a header, click _____ on the menu bar and then click Header and Footer.",
        a: "View",
        b: "Edit",
        c: "Format",
        d: "Tools"
    },
    {
        question: "To change margin settings, click _____ on the menu bar and then point to the Page Setup command.",
        a: "File",
        b: "Edit",
        c: "Format",
        d: "Tools"
    },
    {
        question: "Which menu in MSWord can be used to change character size and typeface?",
        a: "View",
        b: "Tools",
        c: "Format",
        d: "Data"
    },
    {
        question: "From which menu you can insert Header and Footer?",
        a: "Insert Menu",
        b: "View Menu",
        c: "Format menu",
        d: "Tools Menu"
    },
    {
        question: "What is the tool in Word that copies only the format of selected text so that you can apply on other text?",
        a: "Copy",
        b: "Paste",
        c: "Format Painter",
        d: "Paste Special"
    },
    {
        question: "Select a ______ to apply a predefined format to a Word 2007 table",
        a: "Table style",
        b: "Table format",
        c: "Format Style",
        d: "None of above"
    },

    {
        question: "_____ are types of wizards and templates in the Resume Wizard dialog box.",
        a: "Standard, Contemporary, and Sophisticated",
        b: "Professional, Contemporary, and Elegant",
        c: "Formatted, Unformatted, and Graphic",
        d: "Basic, Comprehensive, and Formatted"
    },
    {
        question: "Changing the appearance of a document is called",
        a: "Proofing",
        b: "Editing",
        c: "Formatting",
        d: "All of above"
    },
    {
        question: "Which language does MS-Word use to create Macros?",
        a: "Visual C++",
        b: "Visual Basic",
        c: "FoxPro",
        d: "Access"
    },
    {
        question: "Word stores all frames associated with a Web page in a single file called the _____.",
        a: "authoring page",
        b: "text page",
        c: "frames page",
        d: "hyperlink page"
    },
    {
        question: "You wished to justify text over the height of paper, which option will you choose",
        a: "Page Setup from File menu",
        b: "Paragraph from Format menu",
        c: "From formatting toolbar",
        d: "Font from Format menu"
    },
    {
        question: "If you need to hide some paragraphs, how can you do it?",
        a: "From Paragraph dialog box",
        b: "From Font dialog box",
        c: "From Options Dialog box",
        d: "None of above"
    },
    {
        question: "To display more of the document on the screen in print layout view, the _____ can be hidden.",
        a: "white space at the top of the pages",
        b: "white space at the bottom of the pages",
        c: "gray space between pages",
        d: "all of the above"
    },
    {
        question: "Which of the following is Page Orientation?",
        a: "Landscape",
        b: "Portrait",
        c: "Gutter",
        d: "Only A & B"
    },
    {
        question: "Which indent marker controls all the lines except first line?",
        a: "First Line Indent Marker",
        b: "Left Indent Marker",
        c: "Hanging Indent Marker",
        d: "Right Indent Marker"
    },
    {
        question: "Which of the following typically appear at the end of document for citation of source?",
        a: "End notes",
        b: "Foot notes",
        c: "Header",
        d: "Footer"
    },
    {
        question: "MS Office provides help in many ways, which of these is one of them?",
        a: "What is this?",
        b: "Office Assistant",
        c: "Help menu",
        d: "All of the above"
    },
    {
        question: "To advance rightward from one cell to the next in a table, press the _____ key.",
        a: "tab",
        b: "backspace",
        c: "home",
        d: "enter"
    },
    {
        question: "Which key deletes the character to the left of the cursor?",
        a: "End",
        b: "Backspace",
        c: "Home",
        d: "Delete"
    },
    {
        question: "Which key deletes the character to the right of the cursor?",
        a: "End",
        b: "Backspace",
        c: "Home",
        d: "Delete"
    },
    {
        question: "Where is the quick Access Toolbar and when should you use it?",
        a: "upper-left corner and use it for your favorite commands",
        b: "floats over your text and use it when you need to make formatting changes",
        c: "Home tab and use it when you need to quickly launch or start new document",
        d: "None of above"
    },
    {
        question: "When you save a file as a Web page, Word converts the contents of the document into _____.",
        a: "Java",
        b: "Perl",
        c: "HTML",
        d: "Unix"
    },
    {
        question: "By default, Word automatically formats each heading in a table of contents as __________",
        a: "bookmarks",
        b: "cross-references",
        c: "hyperlinks",
        d: "word-fields"
    },
    {
        question: "Footnotes, endnotes, and indexes are all inserted as __________",
        a: "bookmarks",
        b: "cross-references",
        c: "hyperlinks",
        d: "word fields"
    },
    {
        question: "Which of the following is not the part of standard office suite?",
        a: "Word Processor",
        b: "Database",
        c: "Image Editor",
        d: "File manager"
    },
    {
        question: "Ctrl + L",
        a: "Left Align",
        b: "Left Indent",
        c: "Increase Left Margin",
        d: "Decrease Left Margin"
    },



    {
        question: "The keystrokes Ctrl + I is used to",
        a: "Increase font size",
        b: "Inserts a line break",
        c: "Indicate the text should be bold",
        d: "Applies italic format to selected text"
    },
    {
        question: "Ctrl + K",
        a: "Insert Page Number",
        b: "Insert Hyperlink",
        c: "Insert Header",
        d: "Insert Footer"
    },
    {
        question: "Which of the following can NOT be used to create parallel style column?",
        a: "Format Tabs",
        b: "Table Insert Table",
        c: "Insert Textbox",
        d: "Format Columns"
    },
    {
        question: "Which of the following is used to create newspaper style columns?",
        a: "Format Tabs",
        b: "Table Insert Table",
        c: "Insert Textbox",
        d: "Format Columns"
    },
    {
        question: "Which menu do you choose to create footer? (in MS Office 2003)",
        a: "format, header and footer",
        b: "view, footer",
        c: "insert, header and footer",
        d: "view, header and footer"
    },
    {
        question: "Which menu do you choose to create header? (in MS Office 2003)",
        a: "format, header and footer",
        b: "view, header",
        c: "insert, header and footer",
        d: "view, header and footer"
    },
    {
        question: "What happens when you insert an AutoShape by simply clicking in the document?",
        a: "it appears near the insertion point",
        b: "it is inserted in its default size",
        c: "is selected",
        d: "all of the above"
    },
    {
        question: "What does EXT indicator on status bar of MS Word indicate?",
        a: "It indicates whether the external text is pasted on document or not",
        b: "It indicates whether extended add-ons are installed on MS Word or not",
        c: "It indicates whether Extended Selection mode is turned on or off",
        d: "None of above"
    },
    {
        question: "What happens when you click on Insert >> Picture >> Clip Art",
        a: "It inserts a clipart picture into document",
        b: "It lets you choose clipart to insert into document",
        c: "It opens Clip Art task pane",
        d: "None of above"
    },
    {
        question: "What happens if you press Ctrl + Shift + F8?",
        a: "It activates extended selection",
        b: "It activates the rectangular selection",
        c: "It selects the paragraph on which the insertion line is.",
        d: "None of above"
    },
    {
        question: "What is the use of “All Caps” feature in MS-Word?",
        a: "It changes all selected text into Capital Letter",
        b: "It adds captions for selected Image",
        c: "It shows all the image captions",
        d: "None of the above"
    },
    {
        question: "The feature of Word that automatically adjusts the amount of space between certain combinations of characters so that an entire word looks more evenly spaced. What is that feature called?",
        a: "Spacing",
        b: "Scaling",
        c: "Kerning",
        d: "Positioning"
    },
    {
        question: "Gutter position can be set in following positions",
        a: "Left & Right",
        b: "Left & Top",
        c: "Left & Bottom",
        d: "Left Only"
    },
    {
        question: "The ____ indents all the lines of a paragraph except first line",
        a: "First Line Indent Marker",
        b: "Hanging Indent Marker",
        c: "Left Indent Marker",
        d: "Right Indent Marker"
    },
    {
        question: "A document in portrait orientation prints",
        a: "the same characters per line with the same document in landscape",
        b: "More characters per line than the same document in landscape",
        c: "Less characters per line than the same document in landscape",
        d: "Smaller fonts in order to fit the same amount of characters per line with landscape"
    },
    {
        question: "A _____ is a formatting mark at the end of a line that moves the insertion point to the beginning of the next physical line.",
        a: "paragraph break character",
        b: "nonbreaking space",
        c: "line break character",
        d: "nonbreaking hyphen"
    },
    {
        question: "Which option enables automatic updates in destination documents?",
        a: "embedding",
        b: "objects",
        c: "links",
        d: "relationships"
    },
    {
        question: "Which of the following position is not available for fonts on MS Word?",
        a: "Normal",
        b: "Raised",
        c: "Lowered",
        d: "Centered"
    },
    {
        question: "Which corner of the Word window has the zoom control?",
        a: "upper-left",
        b: "upper-right",
        c: "lower-left",
        d: "lower-right"
    },
    {
        question: "When you point to the _____ corner of a table, the table move handle appears.",
        a: "upper-right",
        b: "lower-left",
        c: "lower-right",
        d: "upper-left"
    }





];




const answers = ["C",	"A",	"D",	"C",	"C",	"C",	"D",	"D",	"B",	"C",	"C",	"D",	"B",	"C",	"C",	"C",	"A",	"C",	"D",	"C",	"B",	"B",	"A",	"C",	"B",	"B",	"C",	"A",	"B",	"B",	"B",	"C",	"C",	"B",	"C",	"A",	"C",	"D",	"D",	"A",	"A",	"A",	"D",	"D",	"C",	"B",	"B",	"C",	"B",	"B",	"B",	"A",	"C",	"C",	"A",	"A",	"C",	"B",	"C",	"A",	"B",	"C",	"B",	"C",	"A",	"B",	"D",	"D",	"C",	"A",	"D",	"A",	"B",	"D",	"A",	"C",	"C",	"D",	"D",	"A",	"D",	"B",	"D",	"D",	"D",	"D",	"D",	"C",	"C",	"B",	"A",	"C",	"B",	"B",	"C",	"C",	"C",	"D",	"D",	"D"]
