The layout for content is

+--left margin auto--+-------content box---------+--left margin auto--+

This triggers automatic centering of the content between the left and right margins.


+--+------------------------------------------------------------------+--+
   +------------------------------------------------------------------+ <-- cards
                 +----------------------------------+ <-- article

The content container can contain content of any width. It defines the margins for any text content, whether cards or an article.



The card grid is also considered layout and uses --layout-margin


The cards container is set to width: 100% and a grid is specified for the content it contains.

Box with left and right margins set to auto with zero padding

  |                                                       |
--+-------------------------------------------------------+--
  |                      Box                              |
  |                                                       |

With padding:

  |                                                       |
--+-------------------------------------------------------+--
  |                                                       |
  |-------------------------------------------------------|
  |                                                       |
  |                                                       |

Something must define the distance down the page between the top of the gradient (container for content container) and where the content starts.

There should be padding on the content container since the gradient container should have zero margin and zero padding, to be "invisible" but it could perhaps take the padding.