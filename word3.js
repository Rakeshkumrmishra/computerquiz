const questions = [{
        question: "The ability to combine name and addresses with a standard document is called _________",
        a: "document formatting",
        b: "database management",
        c: "mail merge",
        d: "form letters"
    },
    {
        question: "Which enables us to send the same letter to different persons?",
        a: "macros",
        b: "template",
        c: "mail merge",
        d: "none"
    },
    {
        question: "A word processor would most likely be used to do",
        a: "keep an account of money spent",
        b: "do a computer search in media center",
        c: "maintain an inventory",
        d: "type a biography"
    },
    {
        question: "What is gutter margin?",
        a: "Margin that is added to the left margin when printing",
        b: "Margin that is added to right margin when printing",
        c: "Margin that is added to the binding side of page when printing",
        d: "Margin that is added to the outside of the page when printing"
    },
    {
        question: "Which can be used for quick access to commonly used commands and tools?",
        a: "Status bar",
        b: "Tool bar",
        c: "Menu bar",
        d: "Title bar"
    },
    {
        question: "Which of the following is not essential component to perform a mail merge operation?",
        a: "Main document",
        b: "Data source",
        c: "Merge fields",
        d: "Word fields"
    },
    {
        question: "When the Language bar is _____, it means that you do not see it on the screen but it will be displayed the next time you start your computer.",
        a: "restored",
        b: "hidden",
        c: "minimized",
        d: "closed"
    },
    {
        question: "AutoCorrect was originally designed to replace _________ words as you type.",
        a: "short, repetitive",
        b: "grammatically incorrect",
        c: "misspelled",
        d: "none of the above"
    },
    {
        question: "Home Key",
        a: "Moves the cursor beginning of the document",
        b: "Moves the cursor beginning of the paragraph",
        c: "Moves the cursor beginning of the screen",
        d: "Moves the cursor beginning of the line"
    },
    {
        question: "“Ctrl + Right Arrow” is used to",
        a: "Moves the cursor one word right",
        b: "Moves the cursor end of the line",
        c: "Moves the cursor end of the document",
        d: "Moves the cursor one Paragraph down"
    },
    {
        question: "End Key",
        a: "Moves the cursor end of the line",
        b: "Moves the cursor end of the document",
        c: "Moves the cursor end of the paragraph",
        d: "Moves the cursor end of the screen"
    },
    {
        question: "“Ctrl + PageDown” is used to",
        a: "Moves the cursor one Paragraph Down",
        b: "Moves the cursor one Page Down",
        c: "Moves the cursor one Line Down",
        d: "Moves the cursor one Screen Down"
    },
    {
        question: "“Ctrl + Down Arrow” is used to",
        a: "Moves the cursor one paragraph down",
        b: "Moves the cursor one line down",
        c: "Moves the cursor one page down",
        d: "Moves the cursor one screen down"
    },
    {
        question: "Page Up Key",
        a: "Moves the cursor one line up",
        b: "Moves the cursor one screen up",
        c: "Moves the cursor one page up",
        d: "Moves the cursor one paragraph up"
    },
    {
        question: "“Ctrl + Left Arrow” is used to",
        a: "Moves the cursor beginning of the Line",
        b: "Moves the cursor one word left",
        c: "Moves the cursor one paragraph up",
        d: "Moves the cursor one paragraph down"
    },
    {
        question: "Page Down Key",
        a: "Moves the cursor one line down",
        b: "Moves the cursor one page down",
        c: "Moves the cursor one screen down",
        d: "Moves the cursor one paragraph down"
    },
    {
        question: "“Ctrl + PageUp” is used to",
        a: "Moves the cursor one Page Up",
        b: "Moves the cursor one Paragraph Up",
        c: "Moves the cursor one Screen Up",
        d: "Moves the cursor one Line Up"
    },
    {
        question: "“Ctrl + Up Arrow” is used to",
        a: "Moves the cursor one page up",
        b: "Moves the cursor one line up",
        c: "Moves the cursor one screen up",
        d: "Moves the cursor one paragraph up"
    },
    {
        question: "“Ctrl + Home” is used to",
        a: "Moves the cursor to the beginning of Document",
        b: "Moves the cursor to the beginning of Line",
        c: "Moves the cursor to the beginning of Paragraph",
        d: "All of the above"
    },
    {
        question: "“Ctrl + End” is used to",
        a: "Moves the cursor to the end of Line",
        b: "Moves the cursor to the end of Document",
        c: "Moves the cursor to the end of Paragraph",
        d: "None of the Above"
    },
    {
        question: "Which of the following are word processing software?",
        a: "WordPerfect",
        b: "Easy Word",
        c: "MS Word",
        d: "All of above"
    },
    {
        question: "Which file starts MS Word?",
        a: "winword.exe",
        b: "word.exe",
        c: "msword.exe",
        d: "word2003.exe"
    },
    {
        question: "Ctrl + N",
        a: "Save Document",
        b: "Open Document",
        c: "New Document",
        d: "Close Document"
    },
    {
        question: "To exit from the Resume Wizard and return to the document window without creating a resume, click the _____ button in any panel in the Resume Wizard dialog box.",
        a: "Cancel",
        b: "Back",
        c: "Next",
        d: "Finish"
    },
    {
        question: "What are inserted as cross-reference in Word?",
        a: "Placeholders",
        b: "Bookmarks",
        c: "Objects",
        d: "Word fields"
    },
    {
        question: "Which of the following is not the Section Break Option?",
        a: "Next Page",
        b: "Previous Page",
        c: "Odd Page",
        d: "Even Page"
    },
    {
        question: "Which of the following is not valid version of MS Office?",
        a: "Office XP",
        b: "Office Vista",
        c: "Office 2007",
        d: "None of above"
    },
    {
        question: "By default, on which page the header or the footer is printed?",
        a: "on first page",
        b: "on alternate page",
        c: "on every page",
        d: "none of the above"
    },
    {
        question: "Where can you find the horizontal split bar on MS Word screen?",
        a: "On the left of horizontal scroll bar",
        b: "On the right of horizontal scroll bar",
        c: "On the top of vertical scroll bar",
        d: "On the bottom of vertical scroll bar"
    },
    {
        question: "Ctrl + G",
        a: "Open Paragraph Dialog box activating Goto Tab",
        b: "Open Page Setup Dialog box activating Goto Tab",
        c: "Open Find and Replace Dialog box with activating Goto Tab",
        d: "Open Goto Dialog box"
    },
    {
        question: "Ctrl + F",
        a: "Open Find and Replace Dialog box with activating Find Tab",
        b: "Open Page Setup Dialog box with activating Layout Tab",
        c: "Open Font Dialog Box with activating Font tab",
        d: "Open File Save as Dialog box"
    },
    {
        question: "Ctrl + H",
        a: "Open Find and Replace Dialog box with activating Replace Tab",
        b: "Open Format Dialog box activating Insert Hyper Link tab",
        c: "Open Insert Dialog box activating Insert Hyper Link Tab",
        d: "Open Insert Hyper Link Dialog box"
    },
    {
        question: "Ctrl + P",
        a: "Open Paragraph Dialog Box",
        b: "Open Page Format Dialog Box",
        c: "Open Save Dialog Box",
        d: "Open Print Dialog box"
    },
    {
        question: "Ctrl + T",
        a: "Hanging Indent",
        b: "Left Indent",
        c: "Open Tabs Dialog box",
        d: "Terminate all opened Dialog box"
    },
    {
        question: "When sharing data in Office, the ________ document is the document in which the data was first entered.",
        a: "source",
        b: "destination",
        c: "original",
        d: "primary"
    },
    {
        question: "With which view can you see how text and graphics will appear on the printed page?",
        a: "Normal",
        b: "Print Layout",
        c: "Outline",
        d: "Web Layout"
    },
    {
        question: "Portrait and Landscape are",
        a: "Page Orientation",
        b: "Paper Size",
        c: "Page Layout",
        d: "All of above"
    },
    {
        question: "To verify that the note text is positioned correctly on the page, switch to _____ view or display the document in print preview.",
        a: "normal",
        b: "print layout",
        c: "page layout",
        d: "page edit"
    },
    {
        question: "Which of the following is true regarding page Orientation of a Document?",
        a: "Page Orientation can be change at any time",
        b: "Page Orientation of document determines by printer",
        c: "Page Orientation must be set before start typing",
        d: "Page Orientation of a document cannot be changed."
    },
    {
        question: "Which feature helps you to inserts the contents of the Clipboard as text without any formatting",
        a: "Paste Special",
        b: "Format Painter",
        c: "Page Setup",
        d: "Styles"
    },
   
    {
        question: "Switching between portrait and landscape modes involves the:",
        a: "header and footer toolbar",
        b: "print layout view",
        c: "page setup dialog box",
        d: "none of the above"
    },
    {
        question: "Where can you change the vertical alignment?",
        a: "Formatting toolbar",
        b: "Paragraph dialog box",
        c: "Page Setup dialog box",
        d: "Standard toolbar"
    },
    {
        question: "A _____ is a collection of predefined design elements and color schemes.",
        a: "feature",
        b: "hyperlink",
        c: "palette",
        d: "theme"
    },
    {
        question: "Change the _____ to create a document in wide format",
        a: "Page Orientation",
        b: "Page margins",
        c: "Paper Style",
        d: "Paper Source"
    },
    {
        question: "_____ formatting is the process of changing the way letters, numbers, punctuation marks, and symbols appear on the screen and in print.",
        a: "Document",
        b: "Character",
        c: "Paragraph",
        d: "Object"
    },
    {
        question: "The Word Count command on the Tools menu displays the number of words as well as the number of _____ in the current document.",
        a: "lines",
        b: "characters",
        c: "paragraphs",
        d: "all of the above"
    },
    {
        question: "Which operation you will perform if you need to move a block of text?",
        a: "Copy and Paste",
        b: "Cut and Paste",
        c: "Paste and Delete",
        d: "Paste and Cut"
    },
    {
        question: "Ctrl + V",
        a: "Paste Texts in the beginning of Document",
        b: "Paste Images in the beginning of Document",
        c: "Paste Tables at the middle of Document",
        d: "None of the above"
    },
    {
        question: "The _____, or typeface, defines the appearance and shape of letters, numbers, and special characters.",
        a: "font",
        b: "font size",
        c: "point",
        d: "paragraph formatting"
    },
    {
        question: "Columns dialog box can be opened from",
        a: "Format menu Columns submenu",
        b: "Double click on column space in ruler",
        c: "Press Alt + O + C",
        d: "All of above"
    },
    {
        question: "You can detect spelling and grammar errors by",
        a: "Press Shift + F7",
        b: "Press Ctrl + F7",
        c: "Press Alt+ F7",
        d: "Press F7"
    },
    {
        question: "How can you break the current column and start a new column immediately?",
        a: "Press Ctrl + Shift + Enter",
        b: "Press Alt + Enter",
        c: "Press Ctrl + Enter",
        d: "Press Alt + Shift + Enter"
    },
    {
        question: "How can you disable extended selection mode?",
        a: "Press F8 again to disable",
        b: "Press Del to disable",
        c: "Press Esc to disable",
        d: "Press Enter to disable"
    },
    {
        question: "To instruct Word to stop bulleting paragraphs, do any of the following except _____.",
        a: "press the enter key twice",
        b: "click the Undo button on the Standard toolbar",
        c: "press the backspace key to remove the bullet",
        d: "click the Bullets button on the Formatting toolbar"
    },
    {
        question: "Which of these toolbars allows changing of Fonts and their sizes?",
        a: "Standard",
        b: "Formatting",
        c: "Print Preview",
        d: "None of these"
    },
    {
        question: "To view headers and footers, you must switch to",
        a: "normal view",
        b: "print layout view",
        c: "print preview mode",
        d: "both B and C"
    },
    {
        question: "Ctrl + C",
        a: "Copy the selected text",
        b: "Cut the selected text",
        c: "Print the selected text",
        d: "Paste the selected text"
    },
    {
        question: "Ctrl + Q",
        a: "Paragraph formatting (Line Space and Paragraph Space)",
        b: "Close Word Application without saving Document",
        c: "Print Whole Document without confirmation",
        d: "Does nothing"
    },
    {
        question: "Background color or effects applied on a document is not visible in",
        a: "Web layout view",
        b: "Print Layout view",
        c: "Reading View",
        d: "Print Preview"
    },
    {
        question: "Ctrl + R",
        a: "Re-Open the last closed document",
        b: "Re-Print the last printed page",
        c: "Re-Apply the last paragraph formatting",
        d: "Right align the selected Paragraph"
    },
   
    {
        question: "When Word flags a possible spelling or grammar error, it also changes the mark on the Spelling and Grammar Status icon to a _____.",
        a: "green X",
        b: "green check mark",
        c: "red X",
        d: "red check mark"
    },
    {
        question: "Which of the following is not a font style?",
        a: "Bold",
        b: "Italics",
        c: "Regular",
        d: "Superscript"
    },
    {
        question: "The other Col# are inactive when you’ve select 3 columns. How will you activate those boxes?",
        a: "double click on spacing box",
        b: "double click on inactive Col#",
        c: "Remove mark from Line between checkbox",
        d: "Remove mark from Equal Column Width check box"
    },
    {
        question: "From where you can access Save command?",
        a: "Home tab",
        b: "Insert tab",
        c: "Review tab",
        d: "None of above"
    },
    {
        question: "How can you remove tab stop markers from ruler?",
        a: "Double click the tab marker and choose Remove Tabs",
        b: "Drag the tab stop marker out of the ruler",
        c: "Right click the tab stop marker and choose remove",
        d: "All of above"
    },
    {
        question: "Ctrl + M",
        a: "New Document",
        b: "Close Document",
        c: "Right Indent",
        d: "Left Indent"
    },
    {
        question: "Which of the following is not available on the Ruler of MS Word screen?",
        a: "Tab stop box",
        b: "Left Indent",
        c: "Right Indent",
        d: "Center Indent"
    },
    {
        question: "In Word, the default alignment for paragraphs is _____.",
        a: "left-aligned, or flush margins at the left edge and uneven edges at the right edge",
        b: "centered, or equidistant from both the left edge and the right edge",
        c: "right-aligned, or flush margins at the right edge and uneven edges at the left edge",
        d: "justified, or flush margins at both the left and right edges"
    },
    {
        question: "In MS Word, Ctrl+S is for …..",
        a: "Scenarios",
        b: "Size",
        c: "Save",
        d: "Spelling Check"
    },
    {
        question: "Ctrl + W",
        a: "Save and Print the Document",
        b: "Save and Close Word Application",
        c: "Save and Close document",
        d: "Without Save, Close Document"
    },
    {
        question: "The key F12 opens a",
        a: "Save As dialog box",
        b: "Open dialog box",
        c: "Save dialog box",
        d: "Close dialog box"
    },
    {
        question: "Ctrl + I",
        a: "Italic",
        b: "Left Indent",
        c: "Save Document",
        d: "Close Document"
    },
    {
        question: "Ctrl + S",
        a: "Save Document with different name",
        b: "Save Document with same name",
        c: "Save Document and Close Word Application",
        d: "Save Document and Print whole Pages"
    },
    {
        question: "If you will be displaying or printing your document on another computer, you’ll want to make sure and select the _____________ option under the ‘Save’ tab.",
        a: "Embed Fonts",
        b: "Embed True Type Fonts",
        c: "Save True Type Fonts",
        d: "Save Fonts"
    },
    {
        question: "Ctrl + J",
        a: "Align Justify",
        b: "Insert Hyperlink",
        c: "Search",
        d: "Print"
    },
    {
        question: "What is a portion of a document in which you set certain page formatting options?",
        a: "Page",
        b: "Document",
        c: "Section",
        d: "Page Setup"
    },
    {
        question: "If you need to double underline a word, how will you do that?",
        a: "Go to Format menu and then Font option. Open Underline Style and choose Double Underline",
        b: "From Format menu choose Font option and then from Font tab open Underline Style and select Double Underline",
        c: "Select the text then choose Format >> Font and on Font tab, open Underline Style and choose Double Underline",
        d: "Click double underline tool on formatting toolbar"
    },
    {
        question: "How can you apply exactly the same formatting you did to another text?",
        a: "Copy the text and paste in new location. Then type the new text again.",
        b: "Copy the text and click on Paste Special tool on new place",
        c: "Select the text then click on Format Painter and select the new text",
        d: "All of above"
    },
    {
        question: "Which of the following is not one of the three ‘Mail Merge Helper’ steps?",
        a: "merge the two files",
        b: "create the main document",
        c: "set the mailing list parameters",
        d: "create the data source"
    },
    {
        question: "To select a block of text, click at the beginning of the selection, scroll to the end of the selection, position the mouse pointer at the end of the selection, hold down the _____ key, and then click (or drag through the text).",
        a: "ctrl",
        b: "alt",
        c: "shift",
        d: "tab"
    },
    {
        question: "What is the shortcut-key for manual line break?",
        a: "CTRL + Enter",
        b: "Alt + Enter",
        c: "Shift + Enter",
        d: "Space + Enter"
    },
    {
        question: "Which key should be pressed to start a new paragraph in MS-Word?",
        a: "Down Cursor Key",
        b: "Enter Key",
        c: "Shift + Enter",
        d: "Ctrl + Enter"
    },
    {
        question: "What is the shortcut key to display field codes?",
        a: "Alt + F9",
        b: "Ctrl + F9",
        c: "Shift + F9",
        d: "Space + F9"
    },
    {
        question: "To use your keyboard instead of the mouse to select tools on the ribbon, you display the KeyTips by pressing the _____________key?",
        a: "Alt",
        b: "Ctrl",
        c: "Shift+Enter",
        d: "Alt+Enter"
    },
    {
        question: "Press _____ to create a line break, which advances the insertion point to the beginning of the next physical line – ignoring any paragraph formatting instructions.",
        a: "shift+enter",
        b: "ctrl+enter",
        c: "shift+tab",
        d: "ctrl+tab"
    },
    {
        question: "A word field may consist of an optional field instruction called a(n) ______",
        a: "subdocument",
        b: "symbol",
        c: "signal",
        d: "switch"
    },
    {
        question: "Essential business letter elements include the _____.",
        a: "date line and inside address",
        b: "message",
        c: "signature block",
        d: "all of the above"
    },
    {
        question: "Which of the following helps to reduce spelling error in the document?",
        a: "Auto Format",
        b: "Auto Correct",
        c: "Smart Tags",
        d: "Auto Text"
    },
    {
        question: "It is possible to _______ a data source before performing a merge.",
        a: "create",
        b: "modify",
        c: "sort",
        d: "all of the above"
    },
    {
        question: "Word has Web authoring tools allow you to incorporate _____ on Web pages.",
        a: "bullets",
        b: "hyperlinks",
        c: "sounds",
        d: "all of the above"
    },
    {
        question: "When typing in Preeti font all the Ukars turn to something else? What’s the cause?",
        a: "Autotext",
        b: "Autocorrect",
        c: "Speller",
        d: "Preeti font does not work with Word"
    },
    {
        question: "Which of the following commands should you always use before submitting a document to others?",
        a: "find command",
        b: "Replace command",
        c: "Spelling and Grammar",
        d: "Thesaurus"
    },
    {
        question: "What is placed to the left of horizontal scroll bar",
        a: "Tab stop buttons",
        b: "View buttons",
        c: "Split buttons",
        d: "Indicators"
    },
    {
        question: "Insert Date, Format Page Number, and Insert AutoText are buttons on the _____ toolbar.",
        a: "Formatting",
        b: "Header and Footer",
        c: "Standard",
        d: "Edit"
    },
    {
        question: "Which of the following do you use to change margins?",
        a: "formatting toolbar",
        b: "page setup dialog box",
        c: "Standard toolbar",
        d: "paragraph dialog box"
    },
    {
        question: "In order to email a Word document from within MS Word",
        a: "Office button >> Send to >> Mail Recipient",
        b: "Save the file as an email attachment",
        c: "Start Outlook and attach the file while open in Word",
        d: "This is an impossible operation"
    },
    {
        question: "A screen element of MS Word that is usually located below the title bar that provides categorized options is",
        a: "Menu bar",
        b: "Tool Bar",
        c: "Status Bar",
        d: "All of the above"
    },
    {
        question: "In Word 2007 the Zoom is placed on",
        a: "View tab",
        b: "Home tab",
        c: "Status bar",
        d: "A & C both"
    },
    {
        question: "The _____ is a short horizontal line indicating the conclusion of a document.",
        a: "insertion point",
        b: "end mark",
        c: "status indicator",
        d: "scroll box"
    },
    {
        question: "Small squares, called _____, on the selection rectangle that surrounds a graphic can be used to change the dimensions of the graphic.",
        a: "scroll boxes",
        b: "sizing handles",
        c: "status indicators",
        d: "move handles"
    }




];


const answers =["C",	"C",	"D",	"C",	"B",	"D",	"B",	"C",	"D",	"A",	"A",	"B",	"A",	"B",	"B",	"C",	"A",	"D",	"A",	"B",	"D",	"A",	"C",	"D",	"D",	"B",	"B",	"C",	"C",	"C",	"A",	"A",	"D",	"A",	"A",	"B",	"A",	"B",	"A",	"A",	"C",	"C",	"D",	"A",	"B",	"D",	"B",	"D",	"A",	"D",	"D",	"A",	"C",	"B",	"B",	"D",	"A",	"A",	"D",	"D",	"C",	"D",	"D",	"D",	"B",	"D",	"D",	"A",	"C",	"C",	"A",	"A",	"B",	"B",	"A",	"C",	"C",	"C",	"C",	"C",	"C",	"B",	"A",	"A",	"A",	"D",	"D",	"B",	"D",	"D",	"B",	"C",	"B",	"B",	"B",	"A",	"A",	"D",	"B",	"B"]
