using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

public partial class _Default : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {
        TextBox t = new TextBox();
        t.TextMode = TextBoxMode.MultiLine;
        t.Width = new Unit(625);
        t.Height = new Unit(100);
        this.Form.Controls.Add(t);
        this.Controls.Add(t);
        this.Controls.Add(t);
    }
}