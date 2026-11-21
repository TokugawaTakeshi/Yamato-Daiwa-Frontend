namespace YamatoDaiwa.Frontend.GUI_Components.Controls.Validatables.ValidatableControl;


public interface IValidatableControl
{
  
  IValidatableControl HighlightInvalidInput();
  
  
  ValueTask<IValidatableControl.RootElementOffsetCoordinates> GetRootElementOffsetCoordinates();

  record RootElementOffsetCoordinates
  {
    public required double Top { get; init; }
    public required double Left { get; init; }
  }
  
  
  IValidatableControl Focus();

}