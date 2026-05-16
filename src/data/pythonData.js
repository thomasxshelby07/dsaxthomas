export const pythonData = [
  {
    id: "01",
    name: "Get Started",
    objectives: [
      "What is programming?",
      "What is programming language?",
      "How computers understand a programming language?",
      "How to write and run a code?"
    ],
    sections: [
      {
        title: "Lesson One: Introduction to Programming",
        content: [
          "<strong>Computers are dumb.</strong> Computers are only smart because we program them to be.",
          "<strong>What is Programming?</strong><br/>Programming is the process of preparing an instructional program for a device to do some task without making mistakes.",
          "There are two types of languages for communication between a computer and a programmer (human):",
          "1. <strong>Machine language:</strong> which is a binary code (series of 0s and 1s) and computers understood it and it is difficult for humans to understand.",
          "2. <strong>Programming language:</strong> which is a source code and humans understood it and computers could not."
        ],
        subSections: [
          {
            title: "Classification of Programming Languages",
            content: [
              "Programming Language is classified based on the level (Degree) of abstraction and gap between source code and machine code.",
              "• <strong>Source code:</strong> Any collection of code, written using a human-readable programming language, usually as plain text.",
              "• <strong>Machine code:</strong> A computer program written in machine language instructions that can be executed directly by a computer's control unit.",
              "• <strong>High-level language:</strong> Programmer friendly. Humans can easily understand it which helps in easy maintaining and debugging. <em>Examples: Java, C, C++, Python</em>",
              "• <strong>Low-level language:</strong> Machine friendly. Humans can’t understand such languages easily. <em>Examples: Assembly language, Machine language.</em>",
              "<strong>PS:</strong> Computers only understand machine code."
            ]
          }
        ]
      },
      {
        title: "Lesson Two: Compiler and Interpreter",
        content: [
          "All programming languages must be converted to machine-understandable language for execution. This is handled by <strong>Compilers</strong> and <strong>Interpreters</strong>."
        ],
        subSections: [
          {
            title: "What is Compiler?",
            content: [
              "A compiler takes the source code and converts it into machine executable code <strong>at once</strong>. The processor then takes the executable and runs it.",
              "• <strong>Speed:</strong> Faster and more efficient.",
              "• <strong>Examples:</strong> Java, C++"
            ]
          },
          {
            title: "What is Interpreter?",
            content: [
              "An interpreter runs the code <strong>line by line</strong> and executes instruction by instruction without requiring prior compilation into a machine language program.",
              "• <strong>Speed:</strong> Slower and less efficient.",
              "• <strong>Examples:</strong> PHP, Python, Ruby"
            ]
          },
          {
            title: "The Italian Movie Analogy 🎬",
            content: [
              "Suppose you want to watch an Italian movie, but you only understand English.",
              "• <strong>Compiler Approach:</strong> Watch an English <strong>dubbed version</strong>. All scenes are converted to English at once before you start watching.",
              "• <strong>Interpreter Approach:</strong> Watch the movie with English <strong>subtitles</strong>. The translation is provided scene by scene (line by line) while you watch."
            ]
          }
        ]
      },
      {
        title: "Lesson Three: How to write and run a code?",
        content: [
          "To write and execute a Python program, you need an <strong>Editor (IDE)</strong> and a <strong>Compiler/Interpreter</strong>.",
          "<strong>What is IDE?</strong><br/>IDE (Integrated Development Environment) is a place (graphic interface) to write, run, and debug (check errors) code and also convert your source code to machine code. Examples: Visual Studio, PyCharm, Jupyter Notebook."
        ],
        subSections: [
          {
            title: "Syntax: The Rules of Programming",
            content: [
              "You can’t simply type rubbish. Each language has its own set of rules (Grammar) called <strong>Syntax</strong>.",
              "<strong>PS:</strong> Breaking programming rules will result in an error.",
              "<em>Example:</em><br/>Correct: <code>Men's clothes are cheap.</code><br/>Incorrect (Broken Syntax): <code>clothes are cheap Men's</code>"
            ]
          }
        ]
      }
    ],
    keyTakeaways: [
      "Programming is preparing an error-free program for a device.",
      "A programming language is a formal language to communicate with a computer.",
      "Compilers translate code at once; Interpreters execute it line-by-line.",
      "IDE is the tool where we write, run, and debug our source code.",
      "Syntax is the set of grammar rules for a programming language."
    ],
    conceptQuestions: [
      { q: "Why are computers considered 'dumb'?", a: "Computers are considered dumb because they cannot perform any task on their own; they only follow the specific instructions (programs) provided by humans." },
      { q: "What is the primary difference between Source Code and Machine Code?", a: "Source code is written in human-readable language (plain text), while Machine code consists of binary instructions (0s and 1s) that the computer hardware can execute directly." },
      { q: "Explain High-level vs Low-level languages.", a: "High-level languages are programmer-friendly and easy to understand (Python, Java), whereas Low-level languages are machine-friendly and difficult for humans to read (Machine code, Assembly)." },
      { q: "How does the 'Italian Movie' analogy explain a Compiler?", a: "In the analogy, a compiler is like a 'dubbed movie' where the entire content is translated into English at once before viewing." },
      { q: "What is the role of an IDE?", a: "An IDE provides a graphic interface for programmers to write code, run it, debug errors, and manage projects in one place." },
      { q: "What happens if you break the Syntax of a programming language?", a: "Breaking the syntax rules will result in a Syntax Error, and the computer will fail to understand or execute the program." }
    ],
    codingQuestions: [
      { q: "<strong>CHALLENGE 1: The Syntax Detective</strong><br/>Correct the errors in this code to make it run: <code>print(Hello User!) print(2 + 2 = 4)</code>", a: "print(\"Hello User!\")\nprint(\"2 + 2 = 4\")" },
      { q: "<strong>CHALLENGE 2: Multi-line Banner</strong><br/>Print a banner with your name inside a box made of <code>*</code> symbols using only two print statements.", a: "print(\"***********\")\nprint(\"*  JOHN   *\")\nprint(\"***********\")" },
      { q: "<strong>CHALLENGE 3: Logic vs Syntax</strong><br/>Write a program that demonstrates a Logical Error (math that is wrong but code runs) and a Syntax Error (code that won't run).", a: "# Syntax Error: print(Hello)\n# Logical Error:\nprint(\"2 + 2 is\", 5) # Code runs but result is wrong" },
      { q: "<strong>CHALLENGE 4: Interactive ID Card</strong><br/>Create a program that takes 'Name' and 'College' as input and prints them in a professional ID card format.", a: "name = input(\"Name: \")\ncol = input(\"College: \")\nprint(f\"ID CARD\\n-------\\nNAME: {name}\\nCOLLEGE: {col}\")" }
    ]
  },
  {
    id: "02",
    name: "Hello Python",
    objectives: [
      "What is Python?",
      "Why we study Python?",
      "What are the key features of Python?",
      "What are applications of Python?",
      "How to install jupyter notebook?"
    ],
    sections: [
      {
        title: "Lesson One: Introduction to Python",
        content: [
          "Python is a simple, general-purpose, dynamic, object-oriented, interpreted as well as compiled, high-level programming language.",
          "<strong>History of Python:</strong><br/>• Invented in the <strong>Netherlands</strong> in the early 90’s.<br/>• Created by <strong>Guido Van Rossum</strong>.<br/>• First version released in <strong>1991</strong>.<br/>• Derived from the <strong>ABC programming language</strong>.",
          "<strong>Why the name 'Python'?</strong><br/>Guido liked a 1970s TV show called <em>Monty Python’s Flying Circus</em>. He wanted a short, unique name, so he chose 'Python'."
        ],
        subSections: [
          {
            title: "Python Versions",
            content: [
              "• <strong>Python 1.0:</strong> Jan 1994",
              "• <strong>Python 2.0:</strong> Oct 2000",
              "• <strong>Python 3.0:</strong> Dec 2008",
              "• <strong>Current:</strong> 3.12 (Feb 2024)",
              "<strong>PS:</strong> Python 3 is not backward compatible with Python 2."
            ]
          },
          {
            title: "Key Features",
            content: [
              "• <strong>Simple:</strong> Syntax is easy to learn. Comparison:<br/>C Code: <code>printf(\"Hello World\");</code> (requires setup)<br/>Python: <code>print(\"Hello World\")</code>",
              "• <strong>Open Source:</strong> Free to download and customize.",
              "• <strong>Platform Independent:</strong> Runs on any OS (Windows, Mac, Linux).",
              "• <strong>Portable:</strong> Gives the same result on any platform.",
              "• <strong>Huge Library:</strong> Extensive tools to fulfill any requirement."
            ]
          }
        ]
      },
      {
        title: "Lesson Two: Applications of Python",
        content: [
          "Python is a 'does it all' language. Here are 10 major applications:"
        ],
        subSections: [
          {
            title: "10 Real-World Uses",
            content: [
              "1. <strong>Web Development:</strong> Using frameworks like Flask and Django.",
              "2. <strong>Game Development:</strong> Libraries like PyGame for 2D/3D games.",
              "3. <strong>AI & Machine Learning:</strong> The brain behind YouTube recommendations (TensorFlow, PyTorch).",
              "4. <strong>Desktop & Mobile Apps:</strong> Using Tkinter and Kivy.",
              "5. <strong>Image Processing:</strong> Face recognition & detection (OpenCV, PIL).",
              "6. <strong>Text Processing:</strong> Used by Facebook to detect hate speech.",
              "7. <strong>Audio & Video:</strong> Spotify, Netflix, and YouTube are powered by Python.",
              "8. <strong>Web Scraping:</strong> Collecting data from websites (BeautifulSoup, Selenium).",
              "9. <strong>Data Science:</strong> Data analysis and visualization (Matplotlib, Seaborn).",
              "10. <strong>Scientific Computing:</strong> High-level math and linear algebra (FreeCAD, Abaqus)."
            ]
          }
        ]
      },
      {
        title: "Lesson Three: Python Installation (Jupyter Notebook)",
        content: [
          "Jupyter Notebook is a popular web-based IDE for Data Science and Machine Learning."
        ],
        subSections: [
          {
            title: "Installation Steps",
            content: [
              "1. Visit <code>anaconda.com/download</code>.",
              "2. Download for Windows/Mac.",
              "3. Run the file and click 'Install for me only'.",
              "4. Once completed, search for <strong>Anaconda Prompt</strong>."
            ]
          },
          {
            title: "How to run code on Jupyter?",
            content: [
              "1. Open Anaconda Prompt and select your directory.",
              "2. Click <strong>New → Python 3</strong>.",
              "3. Write <code>print(\"Hello World\")</code> in the cell.",
              "4. Press <strong>Shift + Enter</strong> to execute.",
              "5. You will see the output 'Hello World' immediately below."
            ]
          }
        ]
      }
    ],
    keyTakeaways: [
      "Python was created by Guido Van Rossum in 1991.",
      "It is a high-level, simple, and general-purpose language.",
      "Python is named after 'Monty Python’s Flying Circus'.",
      "Major applications include AI, Web Dev, Data Science, and Game Dev.",
      "Jupyter Notebook is the preferred IDE for Machine Learning tasks."
    ],
    conceptQuestions: [
      { q: "Who created Python and when was it released?", a: "Python was created by Guido Van Rossum and the first version was released in 1991." },
      { q: "What was the inspiration behind the name 'Python'?", a: "The name was inspired by the 1970s BBC comedy show 'Monty Python's Flying Circus', which Guido Van Rossum used to read during the language's development." },
      { q: "Why is Python called 'Platform Independent'?", a: "It is called platform independent because Python programs can run on any operating system (Windows, Linux, Mac) without needing any changes to the code." },
      { q: "Mention any 3 major applications of Python.", a: "1. AI & Machine Learning, 2. Web Development (Django/Flask), 3. Data Science (Visualization/Analysis)." },
      { q: "Is Python 3 backward compatible with Python 2?", a: "No, Python 3 does not provide backward compatibility, meaning Python 2 programs might not run correctly in Python 3." },
      { q: "Which programming language was Python derived from?", a: "Python was derived from the ABC programming language." }
    ],
    codingQuestions: [
      { q: "<strong>CHALLENGE 1: Python's Age Tracker</strong><br/>Write a program that calculates how many years it has been since Python was first released (1991).", a: "current_year = 2024\nrelease_year = 1991\nage = current_year - release_year\nprint(\"Python is\", age, \"years old!\")" },
      { q: "<strong>CHALLENGE 2: Application Roadmap</strong><br/>Print a roadmap showing 3 domains of Python and one major library used in each (e.g., 'Web -> Django').", a: "print(\"1. Web Development -> Django\")\nprint(\"2. Data Science -> Pandas\")\nprint(\"3. AI -> TensorFlow\")" },
      { q: "<strong>CHALLENGE 3: The Version Printer</strong><br/>Import the <code>sys</code> module and print the current version of Python being used.", a: "import sys\nprint(\"Python Version:\", sys.version)" },
      { q: "<strong>CHALLENGE 4: Multi-Feature List</strong><br/>Print 5 features of Python using a single <code>print()</code> function but each feature on a new line.", a: "print(\"1. Simple\\n2. Open Source\\n3. Portable\\n4. Interpreted\\n5. Huge Library\")" }
    ]
  },
  {
    id: "03",
    name: "Variables",
    objectives: [
      "What is a variable?",
      "What are the properties of a variable?",
      "How can we create and use variables in Python?",
      "What is keyword?",
      "What operations can be performed on variables?"
    ],
    sections: [
      {
        title: "Lesson One: Introduction to Variables",
        content: [
          "<strong>What is Variable?</strong><br/>Variable is the name which we give to the memory location which holds some data. With a variable we can store the data, access the data and also manipulate the data.",
          "<strong>PS:</strong> Variable is a container where you can store a value.",
          "To summarize, a variable is a:",
          "• Name<br/>• Refers to a value<br/>• Hold some data<br/>• Name of a memory location",
          "<strong>The Librarian Analogy:</strong><br/>Consider librarians. To store and access tons of books, they make a catalogue based on genre with reference locations. That is how variables also work for data in memory."
        ],
        subSections: [
          {
            title: "Properties of a Variable",
            content: [
              "1. <strong>Type:</strong> What type of data you store in the variable? (number, word, etc).",
              "2. <strong>Scope:</strong> Who can access these data? The boundaries within which the variable is accessible.",
              "3. <strong>Value:</strong> What do you store in the variable? Data that can be accessed or modified.",
              "4. <strong>Location:</strong> Where you store the variable? Each memory location has a specific address.",
              "5. <strong>Lifetime:</strong> Till when the variable will be available? The time period for which the memory stores the data."
            ]
          },
          {
            title: "Creating and Using Variables",
            content: [
              "In Python, to create a variable, specify the <strong>Name</strong> and <strong>Assign a Value</strong>.",
              "<strong>Syntax:</strong> <code>name_of_the_variable = value</code>",
              "To see your variable, use the <code>print()</code> function."
            ],
            codeSnippet: {
              language: "python",
              title: "Variable Creation & Printing",
              code: "age = 21\nprint(age)"
            }
          },
          {
            title: "Printing Messages & Input",
            content: [
              "• <strong>print():</strong> Can print specific messages to the screen. Use a comma to separate text and variables.<br/>Ex: <code>print(\"My age is\", age)</code>",
              "• <strong>input():</strong> Function that accepts values from the user.<br/>Ex: <code>age = input(\"Enter your age?\")</code>"
            ],
            codeSnippet: {
              language: "python",
              title: "Input/Output Example",
              code: "age = input(\"Enter your age?\\n\")\nprint(\"Your age is\", age)"
            }
          }
        ],
        exercises: [
          { id: "3.1", q: "Create a variable 'date' and store today's date then print it with 'Today's date is'.", a: "date = 16\nprint(\"Today's date is\", date)" }
        ]
      },
      {
        title: "Lesson Two: Rules and Keywords",
        content: [
          "Python has strict rules for naming variables and reserves certain words (keywords) for its own use."
        ],
        subSections: [
          {
            title: "6 Rules for Creating Variables",
            content: [
              "1. Must start with a <strong>letter or underscore</strong> (Ex: <code>_age = 23</code>).",
              "2. Cannot start with a <strong>number</strong> (Ex: <code>1dollar = 76</code> is INVALID).",
              "3. Cannot use any <strong>special symbol</strong> (Ex: <code>$dollar = 74</code> is INVALID).",
              "4. Cannot use <strong>space</strong>; use underscore instead (Ex: <code>My_Age = 24</code>).",
              "5. Variable names are <strong>Case Sensitive</strong> (Ex: <code>age = 21</code> then <code>print(Age)</code> results in <code>NameError</code>).",
              "6. Cannot be a <strong>keyword</strong>."
            ]
          },
          {
            title: "What is a Keyword?",
            content: [
              "Keywords are special reserved words with specific meanings. There are 33 keywords in Python.",
              "All are in lower case except <strong>True, False,</strong> and <strong>None</strong>."
            ],
            codeSnippet: {
              language: "python",
              title: "See all keywords",
              code: "import keyword\nprint(keyword.kwlist)"
            }
          },
          {
            title: "Multiple Variable Assignment",
            content: [
              "• <strong>Multiple variables to multiple values:</strong> <code>Sid, age, grade = 4327, 24, 9</code> (Must have equal items on both sides).",
              "• <strong>Single value to multiple variables:</strong> <code>Sid = age = grade = 10</code>"
            ]
          }
        ],
        exercises: [
          { id: "3.2", q: "Create a variable 'bd' and take input birth date from user then print it with 'Your birthdate is'.", a: "bd = input(\"Tell me your birthdate? \")\nprint(\"Your birthdate is\", bd)" }
        ]
      },
      {
        title: "Lesson Three: Variable Operations",
        content: [
          "Common operations include checking memory location, reassigning, and deleting variables."
        ],
        subSections: [
          {
            title: "Memory Location and Reassignment",
            content: [
              "• <strong>id():</strong> Used to get the memory address. Note that when a variable is reassigned, its memory location also changes.",
              "• <strong>Reassigning:</strong> Updating the value of an existing variable."
            ],
            codeSnippet: {
              language: "python",
              title: "Memory Identity",
              code: "dollar = 69\nprint(id(dollar))\ndollar = 72\nprint(id(dollar))"
            }
          },
          {
            title: "Deleting and Constants",
            content: [
              "• <strong>del:</strong> Deletes a variable from memory. (Ex: <code>del book</code>).",
              "• <strong>Constants:</strong> Variables whose values cannot be changed (Ex: <code>GRAVITY = 9.81</code>)."
            ],
            codeSnippet: {
              language: "python",
              title: "Variable Deletion",
              code: "book = 5\ndel book\n# print(book) # This will raise NameError"
            }
          }
        ],
        exercises: [
          { id: "3.3", q: "Create 'ap', take user input, print ID, reassign to 34, print new ID, then delete 'ap'.", a: "ap = input(\"Enter apple price: \")\nprint(\"Price:\", ap, \"ID:\", id(ap))\nap = 34\nprint(\"New Price:\", ap, \"New ID:\", id(ap))\ndel ap" }
        ]
      }
    ],
    keyTakeaways: [
      "Variable is the name which we give to the memory location which holds some data.",
      "Properties: Type, Scope, Value, Location, and Lifetime.",
      "print() displays messages; input() accepts user values.",
      "Variable naming follows 6 strict rules (starts with letter/_, no numbers at start, case sensitive, etc.).",
      "Keywords are reserved words (33 in total) that cannot be used as names.",
      "Operations: id() for memory address, reassigning values, and del for removal."
    ],
    conceptQuestions: [
      { q: "What is the Librarian Analogy for variables?", a: "Librarians catalogue books with reference locations to find them easily; similarly, variables serve as catalogued names for data in specific memory addresses." },
      { q: "What are the 5 properties of every variable?", a: "Type, Scope, Value, Location, and Lifetime." },
      { q: "What happens if you try to use a keyword as a variable name?", a: "Python will raise a <code>SyntaxError</code> because keywords are reserved for specific language functions." },
      { q: "Why does Python raise a NameError if you use the wrong case for a variable?", a: "Python is Case Sensitive, meaning <code>age</code> and <code>Age</code> are treated as two entirely different entities." },
      { q: "What is the difference between a variable and a constant?", a: "A variable's value can be changed during execution, whereas a constant's value (like GRAVITY) is intended to remain fixed." },
      { q: "How many keywords exist in Python and which ones start with capital letters?", a: "There are 33 keywords. Only <code>True</code>, <code>False</code>, and <code>None</code> start with capital letters." }
    ],
    codingQuestions: [
      { q: "<strong>CHALLENGE 1: Variable Swap Magic</strong><br/>Write a program to swap two variables <code>a</code> and <code>b</code> WITHOUT using a third temporary variable.", a: "a = 10\nb = 20\nprint(\"Before:\", a, b)\na, b = b, a\nprint(\"After:\", a, b)" },
      { q: "<strong>CHALLENGE 2: Compound Interest Calculator</strong><br/>Take Principal, Rate, and Time as input. Calculate and print the Compound Interest.", a: "p = float(input(\"Principal: \"))\nr = float(input(\"Rate: \"))\nt = float(input(\"Time: \"))\namount = p * (1 + r/100)**t\nci = amount - p\nprint(\"Compound Interest:\", ci)" },
      { q: "<strong>CHALLENGE 3: Memory Sync Check</strong><br/>Create two variables <code>x = 256</code> and <code>y = 256</code>. Print their <code>id()</code>. Then change them to <code>257</code> and print IDs again. Explain the result.", a: "x = 256\ny = 256\nprint(id(x) == id(y)) # True (Interning)\nx = 257\ny = 257\nprint(id(x) == id(y)) # False (New objects)" },
      { q: "<strong>CHALLENGE 4: User Profile Builder</strong><br/>Take Name, Age, and City as input. Print a message: 'Hello [Name], you are [Age] years old living in [City]'.", a: "name = input(\"Name: \")\nage = input(\"Age: \")\ncity = input(\"City: \")\nprint(f\"Hello {name}, you are {age} years old living in {city}\")" }
    ]
  },
  {
    id: "04",
    name: "Data Types",
    objectives: [
      "What is a data type?",
      "What are the built-in data types in Python?",
      "How to check the data type of a variable?",
      "What are Numeric, Sequence, and Mapping types?",
      "What is Type Casting (Conversion)?",
      "What are ASCII and Unicode?"
    ],
    sections: [
      {
        title: "Lesson One: Introduction to Data Types",
        content: [
          "Data Type represents the kind of value that tells the compiler or interpreter how the programmer intends to use the data.",
          "Python is <strong>Strongly Typed</strong>, meaning you cannot perform operations on incompatible types (e.g., adding a string to an integer)."
        ],
        subSections: [
          {
            title: "Classification of Data Types",
            content: [
              "1. <strong>None Type:</strong> Represents the absence of a value. <code>x = None</code>.",
              "2. <strong>Numeric Types:</strong> <code>int</code> (whole numbers), <code>float</code> (decimals), <code>complex</code> (a+bj).",
              "3. <strong>Boolean Type:</strong> <code>True</code> or <code>False</code> (used for logic).",
              "4. <strong>Sequence Types:</strong> <code>str</code> (text), <code>list</code>, <code>tuple</code>, <code>range</code>.",
              "5. <strong>Set Types:</strong> <code>set</code>, <code>frozenset</code>.",
              "6. <strong>Mapping Type:</strong> <code>dict</code> (key-value pairs)."
            ]
          }
        ],
        exercises: [
          { id: "4.1", q: "Check the data type of <code>10.5</code> and <code>True</code>.", a: "print(type(10.5))\nprint(type(True))" }
        ]
      },
      {
        title: "Lesson Two: Numeric & Boolean",
        content: [
          "Numbers in Python are simple to use. Integers have arbitrary precision (no limit), and floats follow IEEE 754 standards."
        ],
        subSections: [
          {
            title: "Complex Numbers",
            content: [
              "In Python, <code>j</code> is used for the imaginary part. Example: <code>3 + 5j</code>.",
              "You can extract parts: <code>c.real</code> and <code>c.imag</code>."
            ]
          },
          {
            title: "Boolean Logic",
            content: [
              "Boolean values are internally represented as 1 (True) and 0 (False).",
              "Every object has a truth value (e.g., <code>bool(0)</code> is False, <code>bool(1)</code> is True)."
            ]
          }
        ],
        exercises: [
          { id: "4.2", q: "Create a complex number 2+3j and print its real and imaginary parts.", a: "c = 2 + 3j\nprint(c.real, c.imag)" },
          { id: "4.3", q: "Find the boolean value of an empty list <code>[]</code> and an empty string <code>''</code>.", a: "print(bool([]))\nprint(bool(''))" }
        ]
      },
      {
        title: "Lesson Three: Sequence Types (Overview)",
        content: [
          "Sequences are collections of items that maintain a specific order."
        ],
        subSections: [
          {
            title: "Lists vs Tuples vs Strings",
            content: [
              "• <strong>String (str):</strong> Immutable sequence of characters.",
              "• <strong>List:</strong> Mutable sequence (can be modified).",
              "• <strong>Tuple:</strong> Immutable sequence (read-only)."
            ]
          }
        ],
        exercises: [
          { id: "4.4", q: "Create a list of 3 fruits and change the first fruit to 'Apple'.", a: "fruits = ['banana', 'cherry', 'kiwi']\nfruits[0] = 'Apple'\nprint(fruits)" }
        ]
      },
      {
        title: "Lesson Four: Type Casting",
        content: [
          "Type casting is the process of converting one data type into another."
        ],
        subSections: [
          {
            title: "Implicit vs Explicit",
            content: [
              "• <strong>Implicit:</strong> Done by Python (e.g., <code>int + float = float</code>).",
              "• <strong>Explicit:</strong> Done by the user using functions like <code>int()</code>, <code>float()</code>, <code>str()</code>, <code>list()</code>."
            ]
          },
          {
            title: "ASCII and ord/chr",
            content: [
              "• <code>ord(char)</code>: Returns the ASCII/Unicode value.",
              "• <code>chr(code)</code>: Returns the character for a given code."
            ]
          }
        ],
        exercises: [
          { id: "4.5", q: "Convert the string '123' to an integer and add 7 to it.", a: "s = '123'\nn = int(s)\nprint(n + 7)" },
          { id: "4.6", q: "Find the ASCII value of 'Z' and character for 97.", a: "print(ord('Z'))\nprint(chr(97))" }
        ]
      }
    ],
    keyTakeaways: [
      "Data types define the category of a value and the operations possible.",
      "Python is dynamically but strongly typed.",
      "None represents a null value.",
      "Mutables (List, Set, Dict) can be changed; Immutables (Tuple, String, int) cannot.",
      "Type casting allows converting between compatible types.",
      "ASCII/Unicode values map characters to numbers."
    ],
    conceptQuestions: [
      { q: "What is the difference between mutable and immutable data types?", a: "Mutable types (like lists and dicts) can be changed after creation. Immutable types (like strings and tuples) cannot be modified; any change results in a new object." },
      { q: "What does the <code>None</code> keyword signify?", a: "It represents a 'null' or 'no value' state, often used as a placeholder for optional parameters or returned from functions that don't have a return statement." },
      { q: "How does Python handle very large integers?", a: "Python handles integers with arbitrary precision, meaning they can grow as large as the available memory allows." },
      { q: "What is the result of <code>10 + 2.5</code> and why?", a: "12.5 (a float), because Python performs 'Implicit Type Conversion' to avoid losing decimal precision." },
      { q: "What is the difference between <code>ord()</code> and <code>chr()</code>?", a: "<code>ord()</code> takes a character and returns its numerical ASCII value, while <code>chr()</code> takes a number and returns its character representation." },
      { q: "Can we convert a list into a string directly using <code>str()</code>?", a: "Yes, but it will return the string representation of the list structure (including brackets), not just the joined contents." }
    ],
    codingQuestions: [
      { q: "<strong>CHALLENGE 1: The Complex Analyzer</strong><br/>Create a complex number <code>5 + 2j</code>. Calculate its absolute value (magnitude) and print it.", a: "c = 5 + 2j\nprint(abs(c))" },
      { q: "<strong>CHALLENGE 2: Character Range Printer</strong><br/>Write a program that prints all uppercase letters (A-Z) using their ASCII values in a single loop.", a: "for i in range(65, 91):\n    print(chr(i), end=' ')" },
      { q: "<strong>CHALLENGE 3: Boolean Truth Table</strong><br/>Print the boolean truth value (True/False) for these inputs: 0, 1, 0.0, 'False', '', [].", a: "vals = [0, 1, 0.0, 'False', '', []]\nfor v in vals:\n    print(f\"{v} is {bool(v)}\")" },
      { q: "<strong>CHALLENGE 4: Safe Integer Converter</strong><br/>Take user input as a string. Try to convert it to an integer. If it fails, print 'Not a number'. Hint: Use <code>.isdigit()</code>.", a: "data = input(\"Enter: \")\nif data.isdigit(): print(int(data))\nelse: print(\"Not a number\")" }
    ]
  },
  {
    id: "05",
    name: "Operators",
    objectives: [
      "What is an operator?",
      "Which operators you can use in Python?",
      "What is Assignment Operator?",
      "What are Arithmetic Operators?",
      "What is Compound Operator?",
      "What are Relational Operators?",
      "What is Identity Operator?"
    ],
    sections: [
      {
        title: "Lesson One: Introduction to Operators",
        content: [
          "Operators are symbols used to perform operations on variables and values.",
          "<strong>Unary Operators:</strong> Operate on a single operand (e.g., <code>-x</code>, <code>+x</code>, <code>not x</code>).",
          "<strong>Binary Operators:</strong> Operate on two operands (e.g., <code>x + y</code>, <code>x < y</code>).",
          "<strong>Ternary Operator:</strong> Python uses a conditional expression for this: <code>val_if_true if condition else val_if_false</code>."
        ],
        exercises: [
          { id: "5.1", q: "Demonstrate a unary minus on a variable <code>x = 10</code>.", a: "x = 10\nprint(-x)" },
          { id: "5.2", q: "Use a ternary operator to check if 10 is even or odd.", a: "n = 10\nres = 'Even' if n % 2 == 0 else 'Odd'\nprint(res)" }
        ]
      },
      {
        title: "Lesson Two: Arithmetic & Compound",
        content: [
          "Arithmetic operators: <code>+, -, *, /, %, **, //</code>.",
          "Compound operators (Short-hand): <code>+=, -=, *=, /=</code> etc."
        ],
        subSections: [
          {
            title: "Floor Division vs Division",
            content: [
              "• <code>/</code> (True Division): Always returns a float. <code>10/2 = 5.0</code>.",
              "• <code>//</code> (Floor Division): Returns the integer quotient. <code>10//3 = 3</code>."
            ]
          }
        ],
        exercises: [
          { id: "5.3", q: "Calculate 2 to the power 10 and 17 floor divided by 3.", a: "print(2**10)\nprint(17//3)" }
        ]
      },
      {
        title: "Lesson Three: Relational & Logical",
        content: [
          "<strong>Relational:</strong> Compares values (<code>==, !=, <, >, <=, >=</code>). Always returns Boolean.",
          "<strong>Logical:</strong> Joins conditions (<code>and, or, not</code>)."
        ],
        subSections: [
          {
            title: "Short-circuit Logic",
            content: [
              "• <code>and</code>: Returns first False or last True.",
              "• <code>or</code>: Returns first True or last False."
            ]
          }
        ],
        exercises: [
          { id: "5.4", q: "Check if 10 is greater than 5 AND 20 is less than 30.", a: "print(10 > 5 and 20 < 30)" }
        ]
      },
      {
        title: "Lesson Four: Identity & Membership",
        content: [
          "<strong>Identity (is, is not):</strong> Checks if two variables point to the same memory location.",
          "<strong>Membership (in, not in):</strong> Checks if a value exists in a sequence (string, list, etc.)."
        ],
        exercises: [
          { id: "5.5", q: "Check if the letter 'P' is in 'Python'.", a: "print('P' in 'Python')" },
          { id: "5.6", q: "Create two lists with same values and check if they are the same object.", a: "l1 = [1,2]; l2 = [1,2]\nprint(l1 is l2) # False (different memory)" }
        ]
      }
    ],
    keyTakeaways: [
      "Operators perform actions on operands (variables).",
      "Classification: Unary (1 operand), Binary (2 operands).",
      "Arithmetic operators handle math; math module handles complex functions.",
      "Compound operators (+=, -=) make code concise.",
      "Relational operators compare values; Identity operators compare memory addresses."
    ],
    conceptQuestions: [
      { q: "What is the difference between `/` and `//` in Python?", a: "`/` is float division (e.g., 5/2 = 2.5); `//` is floor division (e.g., 5//2 = 2)." },
      { q: "Explain the Unary Minus operator.", a: "It operates on a single operand to negate its value (positive becomes negative and vice versa)." },
      { q: "What does the bank deposit analogy explain about compound operators?", a: "It shows how <code>balance += deposit</code> is a shorter way of writing <code>balance = balance + deposit</code>." },
      { q: "Why do <code>a = [1,2]</code> and <code>b = [1,2]</code> return False for <code>a is b</code>?", a: "Because they are two different objects in memory, even if their values are the same." },
      { q: "What is the return type of any Relational operator?", a: "It always returns a Boolean value (True or False)." },
      { q: "Name 3 functions provided by the math module.", a: "sqrt(), factorial(), ceil(), floor(), sin(), log()." }
    ],
    codingQuestions: [
      { q: "<strong>CHALLENGE 1: Geometry Master</strong><br/>Calculate the Volume of a Cylinder (πr²h) using the <code>math</code> module for π and <code>**</code> for the square.", a: "from math import pi\nr = float(input(\"Radius: \"))\nh = float(input(\"Height: \"))\nvol = pi * (r ** 2) * h\nprint(\"Volume:\", vol)" },
      { q: "<strong>CHALLENGE 2: Smart Bill Splitter</strong><br/>Take total bill amount and number of friends. Use <code>/</code> to find exact share and <code>ceil()</code> to find the rounded-up integer share for each.", a: "from math import ceil\nbill = float(input(\"Bill: \"))\nfriends = int(input(\"Friends: \"))\nshare = bill / friends\nprint(\"Exact:\", share)\nprint(\"Rounded Up:\", ceil(share))" },
      { q: "<strong>CHALLENGE 3: Memory Address Lab</strong><br/>Create a variable <code>x = 10</code>. Reassign <code>x = x + 5</code>. Print the <code>id(x)</code> before and after. Use <code>is</code> to check if the identity changed.", a: "x = 10\nid1 = id(x)\nx = x + 5\nid2 = id(x)\nprint(\"Changed?\", id1 != id2)" },
      { q: "<strong>CHALLENGE 4: Quadratic Solver Hint</strong><br/>Calculate the discriminant (D = b² - 4ac) using arithmetic operators and its square root using <code>math.sqrt()</code>.", a: "import math\na, b, c = 1, 5, 6\ndisc = b**2 - 4*a*c\nsqrt_d = math.sqrt(disc)\nprint(\"D:\", disc, \"Sqrt(D):\", sqrt_d)" }
    ]
  },
  {
    id: "06",
    name: "Conditional Statements",
    objectives: [
      "What is Conditional Statement?",
      "What is Indentation?",
      "What are Logical Operators?",
      "What is nested if statement?",
      "What is Bitwise Operator?",
      "What is Membership Operators?",
      "What is eval() function?"
    ],
    sections: [
      {
        title: "Lesson One: Introduction to Conditional Statements",
        content: [
          "Decision making in programming is similar to real life. We execute specific blocks of code only when certain conditions are met.",
          "Without conditions, code runs <strong>sequentially</strong>. With conditions, the execution flow changes based on the evaluated result."
        ],
        subSections: [
          {
            title: "4 Types of Conditional Statements",
            content: [
              "1. <strong>if</strong> statement",
              "2. <strong>if else</strong> statement",
              "3. <strong>Nested if</strong> statement",
              "4. <strong>if elif else</strong> statement"
            ]
          }
        ]
      },
      {
        title: "Lesson Two: if Statement & Indentation",
        content: [
          "The <code>if</code> statement tests a specific condition. If it's True, the block runs.",
          "<strong>What is Indentation?</strong><br/>In Python, indentation (typically 4 spaces) is used to define blocks of code. Unlike other languages that use {}, Python uses whitespace.",
          "<strong>Note:</strong> A colon (<code>:</code>) after the condition is mandatory."
        ],
        codeSnippet: {
          language: "python",
          title: "Basic if & Indentation Error",
          code: "age = 20\nif age > 17:\n    print(\"Pass for interview.\")\n\n# IndentationError example:\n# if age > 17:\n# print(\"Failed indentation\")"
        },
        exercises: [
          { id: "6.1", q: "Create 'age', take user input, and check vote eligibility (age > 18).", a: "age = int(input(\"Enter age: \"))\nif age >= 18:\n    print(\"Eligible to vote\")" }
        ]
      },
      {
        title: "Lesson Three: if else statement",
        content: [
          "If the condition is True, the <code>if</code> block runs. If False, the <code>else</code> block runs.",
          "<strong>PS:</strong> Clear rejection is better than ignorance."
        ],
        codeSnippet: {
          language: "python",
          title: "Hiring Filter",
          code: "age = int(input(\"Enter age: \"))\nif age > 17:\n    print(\"Pass for interview.\")\nelse:\n    print(\"Application Denied.\")"
        },
        exercises: [
          { id: "6.2", q: "Create 'username' and implement a login system. If 'john', welcome them to Facebook.", a: "user = input(\"Enter username: \")\nif user == \"john\":\n    print(\"Welcome to Facebook.\")\nelse:\n    print(\"Unknown User.\")" }
        ]
      },
      {
        title: "Lesson Four: Logical Operators",
        content: [
          "Used to combine multiple conditions. Returns True or False.",
          "1. <strong>and:</strong> True only if BOTH are true.",
          "2. <strong>or:</strong> True if AT LEAST ONE is true.",
          "3. <strong>not:</strong> Reverses the result (complement)."
        ],
        codeSnippet: {
          language: "python",
          title: "Compound Conditions",
          code: "age = 25\nif age > 17 and age < 45:\n    print(\"Perfect age range.\")"
        },
        exercises: [
          { id: "6.3", q: "Accept 'nationality' and 'cgpa'. Grant scholarship if Indian and CGPA > 8.5.", a: "nat = input(\"Nationality: \")\ncgpa = float(input(\"CGPA: \"))\nif nat == \"Indian\" and cgpa > 8.5:\n    print(\"Congratulations, you won.\")" }
        ]
      },
      {
        title: "Lesson Five: Nested if Statement",
        content: [
          "An <code>if</code> statement inside another <code>if</code> statement. Allows for multi-level decision making.",
          "<strong>Example:</strong> Checking Age first, then checking GPA inside that block."
        ],
        codeSnippet: {
          language: "python",
          title: "Hiring & GPA Logic",
          code: "age = 21\ngpa = 9.5\nif age > 17:\n    if gpa > 9:\n        print(\"Accepted.\")\n    else:\n        print(\"Waiting List...\")\nelse:\n    print(\"Denied.\")"
        },
        exercises: [
          { id: "6.4", q: "Build a login system requiring both 'username' and 'password' using nested if.", a: "user = input(\"User: \")\npwd = input(\"Pwd: \")\nif user == \"john\":\n    if pwd == \"12345\":\n        print(\"Welcome to Facebook.\")\n    else:\n        print(\"Wrong Password.\")\nelse:\n    print(\"Invalid Username.\")" }
        ]
      },
      {
        title: "Lesson Six: if elif else Statement",
        content: [
          "Used to check multiple conditions in order. Execution stops at the first True condition.",
          "Great for grading systems or multi-range filters."
        ],
        exercises: [
          { id: "6.5", q: "Grade classification based on score: 90-100(A), 80-90(B), 70-80(C), 60-70(D), else(F).", a: "score = int(input(\"Score: \"))\nif score >= 90: print(\"A\")\nelif score >= 80: print(\"B\")\nelif score >= 70: print(\"C\")\nelif score >= 60: print(\"D\")\nelse: print(\"F\")" }
        ]
      },
      {
        title: "Lesson Seven: Swapping & Bitwise Logic",
        content: [
          "<strong>Variable Swapping Methods:</strong>",
          "1. <strong>Third Variable:</strong> <code>temp = a; a = b; b = temp</code>",
          "2. <strong>Python Shortcut:</strong> <code>a, b = b, a</code>",
          "3. <strong>Arithmetic:</strong> <code>a = a + b; b = a - b; a = a - b</code>",
          "4. <strong>Bitwise XOR:</strong> <code>a = a ^ b; b = a ^ b; a = a ^ b</code>"
        ],
        subSections: [
          {
            title: "Bitwise Operators & Bus Stop Problem 🚌",
            content: [
              "Bitwise operators perform calculations on binary bits (Integers only).",
              "<strong>Operators:</strong> AND (&), OR (|), NOT (~), XOR (^), Left Shift (<<), Right Shift (>>).",
              "<strong>The Bus Stop Problem:</strong>",
              "Each stop number is double the previous. If current is 16:",
              "• <strong>Next Stop:</strong> <code>16 << 1</code> (32)",
              "• <strong>Prev Stop:</strong> <code>16 >> 1</code> (8)"
            ]
          }
        ]
      },
      {
        title: "Lesson Eight: Membership Operators",
        content: [
          "Check if an element is present in a sequence (String, List, Tuple, etc.).",
          "• <strong>in:</strong> True if found.",
          "• <strong>not in:</strong> True if not found."
        ],
        codeSnippet: {
          language: "python",
          title: "Searching Sequences",
          code: "text = \"Welcome\"\nprint(\"Wel\" in text) # True\n\nclass_10A = [\"John\", \"Eden\", \"Bob\"]\nprint(\"Lucas\" not in class_10A) # True"
        }
      },
      {
        title: "Lesson Nine: eval() Function",
        content: [
          "Takes a string expression and evaluates it as Python code.",
          "<strong>Note:</strong> Not applicable to compound operators like <code>+=</code>."
        ],
        codeSnippet: {
          language: "python",
          title: "eval() examples",
          code: "print(eval('10 + 10')) # 20\nprint(eval('1 > 2')) # False\nprint(eval('\"Jo\" in \"John\"')) # True"
        },
        exercises: [
          { id: "6.6", q: "Calculate average of 'a' and 'b' using eval().", a: "a, b = 10, 20\nprint(eval('(a + b) / 2'))" },
          { id: "6.7", q: "Calculate ln(e), cos(90), and sqrt(625) using eval() and math module.", a: "from math import *\nprint(eval('log(e)'))\nprint(eval('cos(radians(90))'))\nprint(eval('sqrt(625)'))" }
        ]
      }
    ],
    keyTakeaways: [
      "Conditional statements change execution flow based on True/False results.",
      "Indentation (4 spaces) is strictly required for defining code blocks.",
      "Logical operators (and, or, not) help create complex compound conditions.",
      "Nested if allows hierarchical decision layers.",
      "Bitwise shifts (<<, >>) are fast ways to double or halve values.",
      "Membership operators (in, not in) easily check collections.",
      "eval() is a powerful function that runs string-based expressions."
    ],
    conceptQuestions: [
      { q: "Why is indentation so critical in Python?", a: "Indentation defines the scope of blocks like 'if' and 'else'. Incorrect indentation leads to <code>IndentationError</code>." },
      { q: "What happens if a colon (:) is omitted in an 'if' statement?", a: "Python will throw a <code>SyntaxError</code> as the colon is a mandatory part of the syntax." },
      { q: "How does 'and' differ from 'or' in compound conditions?", a: "'and' requires ALL sub-conditions to be True to succeed, while 'or' only requires AT LEAST ONE to be True." },
      { q: "Explain the 'Bus Stop Problem' logic using Bitwise shifts.", a: "Left shift (<code><<</code>) doubles the value (next stop), and Right shift (<code>>></code>) halves the value (previous stop)." },
      { q: "Can we use <code>eval()</code> for <code>a += 10</code>?", a: "No, <code>eval()</code> is for evaluating expressions that return values, not for statement-level assignments like compound operators." },
      { q: "What is the result of <code>not (5 > 3)</code>?", a: "<code>False</code> (because 5 > 3 is True, and 'not' reverses it)." }
    ],
    codingQuestions: [
      { q: "<strong>CHALLENGE 1: Full Nested Logic (Largest of 3)</strong><br/>Write a program to find the largest of three numbers using <strong>Full Nested If</strong> logic (handling all cases including equality).", a: "a, b, c = 21, 21, 45\nif a >= b:\n    if a >= c: largest = a\n    else: largest = c\nelse:\n    if b >= c: largest = b\n    else: largest = c\nprint(\"Largest:\", largest)" },
      { q: "<strong>CHALLENGE 2: Bitwise Swapping Lab</strong><br/>Implement variable swapping using the XOR (<code>^</code>) operator and explain how it works without a third variable.", a: "a, b = 1, 2\na = a ^ b\nb = a ^ b\na = a ^ b\nprint(f\"After Swap: a={a}, b={b}\")" },
      { q: "<strong>CHALLENGE 3: Leap Year Master</strong><br/>Write a program that uses logical operators to check if a year is a Leap Year. (Divisible by 4 AND (not divisible by 100 OR divisible by 400)).", a: "year = 2024\nif (year % 4 == 0) and (year % 100 != 0 or year % 400 == 0):\n    print(\"Leap Year\")\nelse:\n    print(\"Not a Leap Year\")" },
      { q: "<strong>CHALLENGE 4: Calculator using eval()</strong><br/>Create a dynamic calculator where the user enters a full math expression (e.g., '10 * (2 + 3)') as a string, and you output the result using <code>eval()</code>.", a: "expr = input(\"Enter math expression: \")\ntry:\n    print(\"Result:\", eval(expr))\nexcept:\n    print(\"Invalid Expression\")" }
    ]
  },
  {
    id: "07",
    name: "Functions",
    objectives: [
      "Modular programming and the DRY principle.",
      "Types of functions (Built-in, User-defined, Anonymous).",
      "Parameter Passing: Positional, Keyword, Default, and Variable-length.",
      "Scope and Lifetime: Local, Global, and Non-local namespaces.",
      "First-class Functions, Closures, and Decorators.",
      "Recursive functions and Memory Stack.",
      "Generators and Lazy Evaluation."
    ],
    sections: [
      {
        title: "Lesson One: Functional Abstraction",
        content: [
          "Functions provide a way to group code into reusable blocks, promoting <strong>modularity</strong> and <strong>abstraction</strong>.",
          "<strong>Abstraction:</strong> Hiding complex implementation details and showing only functionality (e.g., calling <code>print()</code> without knowing its internal logic)."
        ],
        subSections: [
          {
            title: "Pass by Object Reference",
            content: [
              "Python doesn't use 'Pass by Value' or 'Pass by Reference'. It uses <strong>Pass by Object Reference</strong>.",
              "• If you pass a <strong>Mutable</strong> object (list, dict), changes inside reflect outside.",
              "• If you pass an <strong>Immutable</strong> object (int, string), reassignment inside doesn't affect the outside variable."
            ]
          }
        ]
      },
      {
        title: "Lesson Two: Argument Architectures",
        content: [
          "Python supports flexible ways to pass data to functions."
        ],
        subSections: [
          {
            title: "The *args and **kwargs",
            content: [
              "• <code>*args</code>: Non-keyword variable-length arguments (received as a <strong>Tuple</strong>).",
              "• <code>**kwargs</code>: Keyword variable-length arguments (received as a <strong>Dictionary</strong>)."
            ],
            codeSnippet: {
              language: "python",
              title: "The Universal Wrapper",
              code: "def wrapper(*args, **kwargs):\n    print(f'Positional: {args}')\n    print(f'Keywords: {kwargs}')\n\nwrapper(1, 2, name='AI', version=3.0)"
            }
          }
        ],
        exercises: [
          { id: "7.1", q: "Create a function that accepts any number of integers and returns their sum and average.", a: "def stats(*nums):\n    s = sum(nums)\n    return s, s/len(nums)\nprint(stats(10, 20, 30))" }
        ]
      },
      {
        title: "Lesson Three: Scope and Namespaces",
        content: [
          "<strong>LEGB Rule:</strong> Python searches for variables in this order: <strong>L</strong>ocal -> <strong>E</strong>nclosing -> <strong>G</strong>lobal -> <strong>B</strong>uilt-in."
        ],
        subSections: [
          {
            title: "The global and nonlocal Keywords",
            content: [
              "• <code>global</code>: Access/Modify variable in the top-level scope.",
              "• <code>nonlocal</code>: Access/Modify variable in the outer (enclosing) function's scope."
            ]
          }
        ],
        exercises: [
          { id: "7.2", q: "Demonstrate <code>nonlocal</code> by updating a counter in a nested function.", a: "def outer():\n    count = 0\n    def inner():\n        nonlocal count\n        count += 1\n        return count\n    return inner\nc = outer()\nprint(c()) # 1\nprint(c()) # 2" }
        ]
      },
      {
        title: "Lesson Four: Advanced Paradigms",
        content: [
          "<strong>First-Class Citizens:</strong> Functions can be passed as arguments, returned from other functions, and assigned to variables."
        ],
        subSections: [
          {
            title: "Closures and Decorators",
            content: [
              "• <strong>Closure:</strong> A nested function that remembers the variables in its enclosing scope even after the outer function has finished executing.",
              "• <strong>Decorator:</strong> A design pattern that allows adding new functionality to an existing object without modifying its structure."
            ],
            codeSnippet: {
              language: "python",
              title: "Logger Decorator",
              code: "def logger(func):\n    def wrapper(*args):\n        print(f'Calling {func.__name__} with {args}')\n        return func(*args)\n    return wrapper\n\n@logger\ndef add(a, b): return a + b"
            }
          }
        ],
        exercises: [
          { id: "7.3", q: "Write a decorator that repeats a function call twice.", a: "def repeat(func):\n    def wrapper():\n        func(); func()\n    return wrapper\n\n@repeat\ndef hello(): print('Hi')\nhello()" }
        ]
      },
      {
        title: "Lesson Five: Recursion & Generators",
        content: [
          "• <strong>Recursion:</strong> Solving a problem by breaking it into smaller instances of itself. Must have a <strong>Base Case</strong>.",
          "• <strong>Generators:</strong> Use <code>yield</code> to produce values lazily. They maintain their state, allowing for efficient memory usage."
        ],
        exercises: [
          { id: "7.4", q: "Write a generator for an infinite sequence of even numbers.", a: "def evens():\n    n = 0\n    while True:\n        yield n\n        n += 2\ng = evens()\nprint(next(g), next(g))" }
        ]
      }
    ],
    keyTakeaways: [
      "Functions are objects in Python (First-Class Citizens).",
      "LEGB rule governs variable resolution.",
      "Closures enable data encapsulation.",
      "Decorators are powerful for cross-cutting concerns (logging, auth).",
      "Generators solve memory issues for large datasets."
    ],
    conceptQuestions: [
      { q: "What is the difference between a parameter and an argument?", a: "Parameters are the variables listed in the function definition. Arguments are the actual values passed to the function when it is called." },
      { q: "Explain the LEGB rule.", a: "It stands for Local, Enclosing, Global, and Built-in. It describes the order in which Python looks up variable names." },
      { q: "What is a pure function?", a: "A function that returns the same output for the same input and has no side effects (doesn't modify global state)." },
      { q: "What is the maximum recursion depth in Python?", a: "Usually 1000, but it can be checked/changed using the <code>sys</code> module." },
      { q: "How do lambda functions differ from regular functions?", a: "Lambdas are anonymous, limited to a single expression, and implicitly return its result." },
      { q: "What is the purpose of the <code>yield</code> keyword?", a: "It turns a function into a generator, allowing it to return values one at a time and resume state later." }
    ],
    codingQuestions: [
      { q: "<strong>CHALLENGE 1: Memoized Factorial</strong><br/>Implement factorial using recursion and a dictionary for memoization to improve performance.", a: "cache = {}\ndef fact(n):\n    if n in cache: return cache[n]\n    if n == 0: return 1\n    cache[n] = n * fact(n-1)\n    return cache[n]\nprint(fact(10))" },
      { q: "<strong>CHALLENGE 2: Timer Decorator</strong><br/>Create a decorator <code>@timer</code> that prints the time taken by any function to execute.", a: "import time\ndef timer(func):\n    def wrapper(*args):\n        start = time.time()\n        res = func(*args)\n        print(f'Time: {time.time()-start:.4f}s')\n        return res\n    return wrapper" },
      { q: "<strong>CHALLENGE 3: Custom Enumerate</strong><br/>Write a generator function <code>my_enumerate(iterable, start=0)</code> that behaves exactly like the built-in <code>enumerate()</code>.", a: "def my_enumerate(data, start=0):\n    n = start\n    for item in data:\n        yield n, item\n        n += 1" },
      { q: "<strong>CHALLENGE 4: Argument Type Checker</strong><br/>Write a function that accepts any number of arguments and returns a dictionary where keys are the types and values are the count of each type.", a: "def type_counter(*args):\n    res = {}\n    for a in args:\n        t = type(a).__name__\n        res[t] = res.get(t, 0) + 1\n    return res\nprint(type_counter(1, 'a', 2.0, [1], 'b'))" }
    ]
  },
  {
    id: "08",
    name: "Strings",
    objectives: [
      "Internal representation (Unicode/UTF-8).",
      "Indexing and Slicing (Memory views).",
      "String Immutability and Memory Optimization (Interning).",
      "Formatting paradigms: %, .format(), and f-strings.",
      "Advanced methods: split, join, translate, and maketrans.",
      "String Validation and Encoding/Decoding."
    ],
    sections: [
      {
        title: "Lesson One: The Unicode Universe",
        content: [
          "In Python 3, all strings are <strong>Unicode</strong> by default. This allows representing characters from almost any language.",
          "<strong>String Interning:</strong> Python optimizes memory by storing only one copy of certain identical strings (like short strings or identifiers)."
        ],
        subSections: [
          {
            title: "Memory Representation",
            content: [
              "Strings are <strong>Immutables</strong>. Any operation that 'modifies' a string actually creates a <strong>new string object</strong> in memory."
            ]
          }
        ]
      },
      {
        title: "Lesson Two: Indexing & Slicing Lab",
        content: [
          "Accessing characters and substrings."
        ],
        subSections: [
          {
            title: "Advanced Slicing",
            content: [
              "<code>string[start:stop:step]</code>",
              "• <code>[::-1]</code>: Reverses the string.",
              "• <code>[::2]</code>: Extracts characters at even indices."
            ],
            codeSnippet: {
              language: "python",
              title: "Slicing Wizardry",
              code: "s = 'Antigravity'\nprint(s[::2]) # 'Atgrvty'\nprint(s[::-1]) # 'ytivargitnA'"
            }
          }
        ],
        exercises: [
          { id: "8.1", q: "Extract 'Python' from 'I love Python programming' using positive slicing.", a: "s = 'I love Python programming'\nprint(s[7:13])" }
        ]
      },
      {
        title: "Lesson Three: Formatting Paradigms",
        content: [
          "Python provides multiple ways to inject variables into strings."
        ],
        subSections: [
          {
            title: "f-Strings (The Modern Way)",
            content: [
              "Introduced in Python 3.6, f-strings are fast and readable.",
              "Syntax: <code>f'Hello {name}'</code>"
            ],
            codeSnippet: {
              language: "python",
              title: "Formatting Examples",
              code: "name = 'John'; age = 20\n# f-string\nprint(f'{name} is {age} years old.')\n# .format()\nprint('{} is {}'.format(name, age))"
            }
          }
        ],
        exercises: [
          { id: "8.2", q: "Print a floating point number <code>3.14159</code> rounded to 2 decimal places using f-strings.", a: "pi = 3.14159\nprint(f'PI is {pi:.2f}')" }
        ]
      },
      {
        title: "Lesson Four: Advanced Methods",
        content: [
          "Beyond basic find and replace."
        ],
        subSections: [
          {
            title: "translate & maketrans",
            content: [
              "Used for mapping characters and deleting them efficiently."
            ],
            codeSnippet: {
              language: "python",
              title: "Cipher Example",
              code: "table = str.maketrans('abc', '123')\nprint('apple'.translate(table)) # '1pple'"
            }
          }
        ],
        exercises: [
          { id: "8.3", q: "Use <code>join()</code> to create a comma-separated string from a list of colors.", a: "colors = ['red', 'blue', 'green']\nprint(', '.join(colors))" }
        ]
      },
      {
        title: "Lesson Five: Encoding & Decoding",
        content: [
          "Converting strings to bytes and vice-versa."
        ],
        codeSnippet: {
          language: "python",
          title: "Bytes Lab",
          code: "s = 'Hello'\nb = s.encode('utf-8') # Convert to bytes\nprint(b) # b'Hello'\nprint(b.decode('utf-8')) # Back to string"
        }
      }
    ],
    keyTakeaways: [
      "Strings are immutable Unicode sequences.",
      "f-strings are the preferred method for formatting.",
      "String interning saves memory for repeated literals.",
      "Slicing creates a new string object.",
      "Encoding (to bytes) is necessary for network/file I/O."
    ],
    conceptQuestions: [
      { q: "Why are strings immutable in Python?", a: "For security (keys in dicts), thread-safety, and performance (interning)." },
      { q: "What is the difference between <code>encode()</code> and <code>decode()</code>?", a: "<code>encode()</code> converts a string (Unicode) to bytes. <code>decode()</code> converts bytes back to a string." },
      { q: "What does the <code>strip()</code> method do?", a: "It removes leading and trailing whitespace (or specific characters if provided)." },
      { q: "How do you check if a string starts with a specific prefix?", a: "Using the <code>startswith('prefix')</code> method." },
      { q: "What is string interning?", a: "A mechanism where Python stores only one copy of certain strings to save memory and speed up comparisons." },
      { q: "What happens if you use a negative step in slicing?", a: "The string is traversed backwards, starting from the end towards the beginning." }
    ],
    codingQuestions: [
      { q: "<strong>CHALLENGE 1: Anagram Checker</strong><br/>Write a function to check if two strings are anagrams (contain same characters in different order).", a: "def is_anagram(s1, s2):\n    return sorted(s1.lower()) == sorted(s2.lower())\nprint(is_anagram('Listen', 'Silent'))" },
      { q: "<strong>CHALLENGE 2: Frequency Mapper</strong><br/>Create a dictionary showing the frequency of each character in a given string.", a: "s = 'antigravity'\nfreq = {c: s.count(c) for c in set(s)}\nprint(freq)" },
      { q: "<strong>CHALLENGE 3: Custom Cipher</strong><br/>Implement a simple Caesar Cipher that shifts each letter in a string by 3 positions forward.", a: "def caesar(text, shift=3):\n    res = ''\n    for char in text:\n        if char.isalpha():\n            start = ord('A') if char.isupper() else ord('a')\n            res += chr(start + (ord(char) - start + shift) % 26)\n        else: res += char\n    return res\nprint(caesar('Hello!'))" },
      { q: "<strong>CHALLENGE 4: Data Sanitizer</strong><br/>Given a messy string <code>'  User_123 @ Gmail . Com '</code>, clean it to become <code>'user_123@gmail.com'</code> using string methods.", a: "s = '  User_123 @ Gmail . Com '\nclean = s.strip().lower().replace(' ', '')\nprint(clean)" }
    ]
  },
  {
    id: "09",
    name: "List and Tuple",
    objectives: [
      "What is data structure?",
      "What is List?",
      "How can you access elements of a list?",
      "How to insert elements in a list?",
      "How to delete elements in a list or the list itself?",
      "How to arrange elements of a list?",
      "What is nested list?",
      "What is list aliasing and cloning?",
      "What operations can you perform on a list?",
      "What is tuple?",
      "What is the difference between List and Tuple?"
    ],
    sections: [
      {
        title: "Lesson One: Introduction to List",
        content: [
          "<strong>What is Data Structure?</strong><br/>A particular way of organizing data so it can be used effectively. Without it, data becomes cluttered and hard to manage.",
          "<strong>What is List?</strong><br/>A data structure that stores a group of elements in a single variable. In Python, lists are <strong>Heterogeneous</strong> (can store different types), <strong>Dynamic</strong> (no fixed size), and <strong>Mutable</strong> (can be changed)."
        ],
        subSections: [
          {
            title: "Creating a List",
            content: [
              "1. <strong>Square Brackets:</strong> <code>l = [1, 2, 3]</code>",
              "2. <strong>list() function:</strong> <code>l = list((1, 2))</code>",
              "3. <strong>range() function:</strong> <code>l = list(range(1, 10))</code>"
            ],
            codeSnippet: {
              language: "python",
              title: "List Creation",
              code: "my_list = ['bag', 'pen', 'cap', 'pen']\nprint(my_list) # Order preserved, duplicates allowed"
            }
          }
        ]
      },
      {
        title: "Lesson Two: Accessing & Modifying",
        content: [
          "Access elements using <strong>Indexing</strong> (starts from 0) or <strong>Slicing</strong> (<code>[start:stop:step]</code>).",
          "<strong>Mutability:</strong> You can reassign specific items: <code>my_list[2] = 'hat'</code>."
        ],
        exercises: [
          { id: "9.1", q: "Create a list of your email, name, gender, and age, then print your name.", a: "profile = [\"john@mail.com\", \"John\", \"M\", 20]\nprint(profile[1])" },
          { id: "9.2", q: "Print your name and age from the profile list using slicing.", a: "print(profile[1::2]) # Assuming name is index 1, age is index 3" },
          { id: "9.3", q: "Create a list of your profile, update email and print index using enumerate.", a: "p = ['john@mail.com', 'John', 'M', 20]\np[0] = 'new@mail.com'\nprint(list(enumerate(p)))" }
        ],
        subSections: [
          {
            title: "Utility Methods",
            content: [
              "• <strong>index(x):</strong> Returns the first index of value x.",
              "• <strong>enumerate(l):</strong> Returns pairs of (index, value)."
            ],
            codeSnippet: {
              language: "python",
              title: "Index & Enumerate",
              code: "l = ['a', 'b', 'c']\nprint(l.index('b')) # 1\nprint(list(enumerate(l))) # [(0, 'a'), (1, 'b'), (2, 'c')]"
            }
          }
        ]
      },
      {
        title: "Lesson Three: Insertion of Elements",
        content: [
          "• <strong>append(x):</strong> Adds x to the end.",
          "• <strong>insert(i, x):</strong> Adds x at specific index i.",
          "• <strong>extend(list2):</strong> Adds all elements of list2 to the current list.",
          "• <strong>Concatenation (+):</strong> Joins two lists into a new one."
        ],
        exercises: [
          { id: "9.4", q: "Append 'pwd123' and insert 'john_doe' at index 1 to your profile list.", a: "profile = ['john@mail.com', 'John']\nprofile.append(\"pwd123\")\nprofile.insert(1, \"john_doe\")\nprint(profile)" },
          { id: "9.5", q: "Create a profile, then create another list with birth date/month/year and merge them using +.", a: "p = ['John', 20]\nbd = [15, 'Aug', 2004]\nfull = p + bd\nprint(full)" }
        ]
      },
      {
        title: "Lesson Four: Deletion of Elements",
        content: [
          "• <strong>remove(x):</strong> Removes first occurrence of x. Raises ValueError if not found.",
          "• <strong>pop(i):</strong> Removes and returns item at index i (default last).",
          "• <strong>del statement:</strong> Deletes specific index or slice (<code>del l[1:3]</code>).",
          "• <strong>clear():</strong> Removes all elements. (Alternatives: <code>l.clear()</code>, <code>del l[:]</code>, <code>l *= 0</code>)."
        ],
        exercises: [
          { id: "9.6", q: "If email is not gmail, delete it. If gender is male, clear the list.", a: "p = ['john@yahoo.com', 'John', 'M', 20]\nif 'gmail' not in p[0]: p.pop(0)\nif p[2] == 'M': p.clear()\nprint(p)" }
        ]
      },
      {
        title: "Lesson Five: Arranging & Nesting",
        content: [
          "• <strong>sort():</strong> Arranges elements in ascending/alphabetical order (must be homogeneous).",
          "• <strong>reverse():</strong> Reverses the current order.",
          "• <strong>Nested List:</strong> A list as an element inside another list. Access using multiple indices: <code>l[0][1]</code>."
        ],
        exercises: [
          { id: "9.7", q: "Sort student names A-Z and then Z-A.", a: "s = ['Zion', 'Alex', 'Bob']\ns.sort()\nprint(s)\ns.reverse()\nprint(s)" },
          { id: "9.8", q: "Create nested list for Section 10A and 10B.", a: "classes = [['John', 'Eva'], ['Bob', 'Alice']]\nprint('10A:', classes[0])" }
        ]
      },
      {
        title: "Lesson Six: Aliasing and Cloning",
        content: [
          "<strong>Aliasing:</strong> Giving a new name to the same memory location. <code>b = a</code>. Changes in one affect the other.",
          "<strong>Cloning:</strong> Creating duplicate independent objects at different memory locations."
        ],
        subSections: [
          {
            title: "9 Cloning Methods",
            content: [
              "1. <code>extend()</code>, 2. <code>+</code> operator, 3. <code>slice [:]</code>, 4. <code>list()</code>, 5. <code>copy()</code>, 6. <code>Shallow Copy</code>, 7. <code>Deep Copy</code> (for nested), 8. <code>append()</code>, 9. <code>List Comprehension</code>."
            ],
            codeSnippet: {
              language: "python",
              title: "Shallow vs Deep Copy",
              code: "import copy\nold = [[1, 2], [3, 4]]\nnew = copy.deepcopy(old) # Completely independent"
            }
          }
        ],
        exercises: [
          { id: "9.9", q: "Add student 'John' then copy the list.", a: "s = ['Alex', 'Bob']\ns.append('John')\nc = s.copy()\nprint(c)" },
          { id: "9.11", q: "Create nested list of 10A/10B, add 'John', then deep copy.", a: "import copy\ns = [['A1', 'A2'], ['B1', 'B2']]\ns[0].append('John')\nc = copy.deepcopy(s)\nprint(c)" }
        ]
      },
      {
        title: "Lesson Seven: Math & Operators",
        content: [
          "• <strong>Methods:</strong> len(), count(), max(), min(), sum(), random.choice().",
          "• <strong>Operators:</strong> Replication (*), Relational (<, ==), Membership (in)."
        ],
        exercises: [
          { id: "9.12", q: "Build Guessing game: Computer picks random 1-10, you guess.", a: "import random\nnums = list(range(1, 11))\ncomp = random.choice(nums)\nuser = int(input('Guess: '))\nif user == comp: print('Win')\nelse: print(f'Lose, it was {comp}')" },
          { id: "9.13", q: "Create list, remove duplicates, check if sum is even.", a: "l = [7, 6, 9, 2, 3, 3]\nl = list(set(l))\ns = sum(l)\nif s % 2 == 0: print(max(l))\nelse: print(min(l))" },
          { id: "9.14", q: "If 2 in list, duplicate list else delete.", a: "l = [1, 2, 3]\nif 2 in l: l *= 2\nelse: l.clear()\nprint(l)" }
        ]
      },
      {
        title: "Lesson Eight: Introduction to Tuple",
        content: [
          "A <strong>Tuple</strong> is an <strong>Immutable</strong> collection. Once created, it cannot be changed.",
          "<strong>Features:</strong> Preserves order, allows duplicates, heterogeneous.",
          "<strong>Syntax:</strong> Parentheses <code>()</code> are optional. Single value needs a comma: <code>(10,)</code>."
        ],
        subSections: [
          {
            title: "Packing & Unpacking",
            content: [
              "• <strong>Packing:</strong> <code>t = 1, 2, 3</code>",
              "• <strong>Unpacking:</strong> <code>a, b, c = t</code> (variables must match count)."
            ],
            codeSnippet: {
              language: "python",
              title: "Tuple Operations",
              code: "t = (40, 10, 20)\nprint(sorted(t)) # Returns a sorted LIST [10, 20, 40]"
            }
          }
        ],
        exercises: [
          { id: "9.15", q: "If 2 in tuple, sort else reverse sort then unpack.", a: "t = (1, 3, 2)\nif 2 in t:\n    l = sorted(t)\nelse:\n    l = sorted(t, reverse=True)\na, b, c = l\nprint(a, b, c)" }
        ]
      }
    ],
    keyTakeaways: [
      "Lists are mutable (changeable); Tuples are immutable (read-only).",
      "Indexing and Slicing work on both.",
      "Aliasing refers to the same object; Cloning creates a new one.",
      "Use Deep Copy for nested structures to ensure independence.",
      "Tuples are preferred for fixed data like weekdays or coordinates."
    ],
    conceptQuestions: [
      { q: "What are the 6 properties of a List?", a: "Heterogeneous, Dynamic nature, Insertion order preserved, Duplicate elements allowed, Index-based, and Mutable." },
      { q: "Difference between append() and insert()?", a: "append() adds at the very end; insert() adds at a specified index." },
      { q: "When should we use a Tuple over a List?", a: "Use a Tuple for fixed data that shouldn't change (e.g., weekdays, coordinates) to ensure data integrity and better performance." },
      { q: "Why does (10) not create a tuple?", a: "Python treats (10) as an integer in parentheses. A comma is mandatory for single-element tuples: (10,)." },
      { q: "What is List Cloning?", a: "The process of creating a duplicate independent object at a different memory location." },
      { q: "What happens if you try to sort a list with strings and integers?", a: "Python raises a TypeError because it cannot compare strings and integers using the '<' operator." }
    ],
    codingQuestions: [
      { q: "<strong>CHALLENGE 1: List Compression Master</strong><br/>Take a list of strings and create a new list containing only strings with length > 3, all converted to uppercase.", a: "l = ['hi', 'hello', 'python', 'no']\nres = [s.upper() for s in l if len(s) > 3]\nprint(res)" },
      { q: "<strong>CHALLENGE 2: Nested List Sum</strong><br/>Given a nested list <code>[[1, 2], [3, 4, 5], [6]]</code>, calculate the total sum of all internal elements.", a: "l = [[1, 2], [3, 4, 5], [6]]\ntotal = sum([sum(sub) for sub in l])\nprint(total)" },
      { q: "<strong>CHALLENGE 3: Tuple Packing Logic</strong><br/>Create a function that takes any number of arguments and returns them as a sorted tuple.", a: "def sort_args(*args):\n    return tuple(sorted(args))\nprint(sort_args(10, 5, 8, 2))" },
      { q: "<strong>CHALLENGE 4: The 9th Clone Test</strong><br/>Demonstrate the difference between Aliasing and Cloning by modifying a nested list and checking if the original changes.", a: "import copy\norig = [[1, 2]]\nalias = orig\nclone = copy.deepcopy(orig)\nalias[0][0] = 99\nprint('Original:', orig) # Changed to 99\nprint('Clone:', clone) # Still 1" }
    ]
  },
  {
    id: "10",
    name: "Set and Dictionary",
    objectives: [
      "What is a Set and its properties?",
      "Mathematical Set Operations (Union, Intersection, etc.).",
      "What is a Dictionary?",
      "Key-Value mapping and Hashing.",
      "Operations on Dictionaries.",
      "Dictionary and Set Comprehensions."
    ],
    sections: [
      {
        title: "Lesson One: Introduction to Set",
        content: [
          "A <strong>Set</strong> is an unordered collection of unique elements. It is defined by curly braces <code>{}</code> or the <code>set()</code> function.",
          "<strong>Properties:</strong> No duplicates, Unordered (no indexing), Mutable (but elements must be hashable)."
        ],
        codeSnippet: {
          language: "python",
          title: "Set Creation",
          code: "s = {1, 2, 2, 3} # {1, 2, 3}\nempty = set() # {} creates a dict"
        }
      },
      {
        title: "Lesson Two: Set Operations",
        content: [
          "Python sets support mathematical operations."
        ],
        subSections: [
          {
            title: "Union, Intersection, Difference",
            content: [
              "• <strong>Union (|):</strong> Elements in either set.",
              "• <strong>Intersection (&):</strong> Elements in both sets.",
              "• <strong>Difference (-):</strong> Elements in set A but not B.",
              "• <strong>Symmetric Difference (^):</strong> Elements in either A or B but not both."
            ],
            codeSnippet: {
              language: "python",
              title: "Venn Diagram Ops",
              code: "a = {1, 2, 3}; b = {3, 4, 5}\nprint(a | b) # {1, 2, 3, 4, 5}\nprint(a & b) # {3}"
            }
          }
        ]
      },
      {
        title: "Lesson Three: Introduction to Dictionary",
        content: [
          "A <strong>Dictionary</strong> is a collection of key-value pairs. Keys must be unique and immutable.",
          "<strong>Analogy:</strong> Like a real-world dictionary where the word is the <strong>Key</strong> and the meaning is the <strong>Value</strong>."
        ],
        codeSnippet: {
          language: "python",
          title: "Dict Basics",
          code: "d = {'name': 'John', 'age': 20}\nprint(d['name']) # John\nd['age'] = 21 # Update"
        }
      },
      {
        title: "Lesson Four: Dictionary Methods",
        content: [
          "• <code>get(key, default)</code>: Returns value for key, or default if not found.",
          "• <code>keys(), values(), items()</code>: Returns view objects.",
          "• <code>update(dict2)</code>: Merges dict2 into current dict.",
          "• <code>pop(key)</code>: Removes key and returns its value."
        ],
        exercises: [
          { id: "10.1", q: "Create a dictionary of 3 students and their marks, then print the average.", a: "marks = {'A': 90, 'B': 80, 'C': 70}\nprint(sum(marks.values()) / len(marks))" }
        ]
      }
    ],
    keyTakeaways: [
      "Sets are for unique, unordered data.",
      "Dictionaries are for fast key-value lookups using Hashing.",
      "Keys must be immutable (strings, numbers, tuples).",
      "Both support comprehensions for concise creation."
    ],
    conceptQuestions: [
      { q: "How do you create an empty set?", a: "Using <code>set()</code>. Using <code>{}</code> creates an empty dictionary." },
      { q: "What happens if you add a duplicate to a set?", a: "The set remains unchanged; duplicates are automatically ignored." },
      { q: "Can a list be a key in a dictionary?", a: "No, because lists are mutable and therefore not hashable." },
      { q: "What is the time complexity of looking up a key in a dictionary?", a: "Average case is O(1) due to hashing." }
    ],
    codingQuestions: [
      { q: "<strong>CHALLENGE 1: Unique Word Counter</strong><br/>Take a sentence and return the number of unique words using a set.", a: "s = 'apple banana apple cherry'\nprint(len(set(s.split())))" },
      { q: "<strong>CHALLENGE 2: Merge and Sum</strong><br/>Merge two dictionaries <code>d1 = {'a': 10, 'b': 20}</code> and <code>d2 = {'b': 30, 'c': 40}</code>. If keys overlap, sum their values.", a: "d1 = {'a': 10, 'b': 20}; d2 = {'b': 30, 'c': 40}\nres = d1.copy()\nfor k, v in d2.items():\n    res[k] = res.get(k, 0) + v\nprint(res)" }
    ]
  }
];
