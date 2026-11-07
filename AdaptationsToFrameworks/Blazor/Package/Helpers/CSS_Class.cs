public static class CSS_Class {

  public static string Join(params IEnumerable<string?> CSS_ClassesNames) {
    
    string workpiece = 
        CSS_ClassesNames.
            OfType<string>().
            Aggregate("", (string buffer, string CSS_ClassesName) => buffer + " " + CSS_ClassesName);

    return workpiece.Length > 0 ? workpiece[1..] : workpiece;
    
  }

}