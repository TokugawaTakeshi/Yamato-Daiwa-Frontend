using System.Text.RegularExpressions;
using YamatoDaiwa.CSharpExtensions;

namespace YamatoDaiwa.Frontend.Helpers;


public static class Markdown
{

  public record LinkData(string URI, string anchorText);

  public static string ReplaceMarkdownBold(string markdownCode, Func<string, string> replacer)
  {

    string[] guidanceSegments = markdownCode.Split("**");

    if (guidanceSegments.Length > 0)
    {

      for (int segmentIndex = 0; segmentIndex <= guidanceSegments.Length - 1; segmentIndex++)
      {

        string currentSegment = guidanceSegments[segmentIndex];

        if (segmentIndex % 2 != 0)
        {
          guidanceSegments[segmentIndex] = replacer(currentSegment);
        }

      }

    }

    return String.Join("", guidanceSegments);

  }

  public static string ReplaceMarkdownLink(string markdownCode, Func<LinkData, string> replacer)
  {

    return RegexExtensions.ReplaceMatchesWithRegularExpressionToDynamicValue(
      new RegexExtensions.ReplacingOfMatchesWithRegularExpressionToDynamicValue.CompoundParameter
      {
        targetString = markdownCode,
        regularExpressionWithCapturingGroups = new Regex(@"\[(?<anchorText>.+?)\]\((?<URI>.+?)\)"),
        replacer = (match) =>
          replacer(
            new LinkData(
              match.namedCapturingGroups.GetValueOrDefault("URI") ?? "",
              match.namedCapturingGroups.GetValueOrDefault("anchorText") ?? ""
            )
          )
      }
    );

  }

}
