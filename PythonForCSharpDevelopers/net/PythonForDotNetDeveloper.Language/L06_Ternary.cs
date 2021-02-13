﻿using System;

namespace PythonForDotNetDeveloper.Language
{
    class Ternary
    {
        public static void Run()
        {
            while (true)
            {
                Console.Write("Enter a number 1 -> 1,000, (blank to exit): ");
                var text = Console.ReadLine();
                if (text == null || text.Trim().Length == 0)
                {
                    Console.WriteLine("Later...");
                    break;
                }

                var num = int.Parse(text);

                var numClass = num < 100 ? "small" : "huge!";

                Console.WriteLine($"The number is {numClass}");
            }
        }
    }
}
