

namespace PythonForDotNetDeveloper.WebApp
{
    public class GuitarsViewModel
    {
        public string Style { get; }
        public Guitar[] Guitars { get; }

        public GuitarsViewModel(string style)
        {
            Style = style;
            Guitars = CatalogService.AllGuitars(style);
        }
    }
}
