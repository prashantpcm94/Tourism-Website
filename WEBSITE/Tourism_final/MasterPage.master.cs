using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Windows.Forms;
using System.Media;
using ClassLibrary2;
using System.Web.WebPages;

public partial class MasterPage : System.Web.UI.MasterPage
{
    static int i = 1;
    static int d = 0;
    SoundPlayer s = new SoundPlayer();
    static Boolean sound = false;
    protected void Page_Load(object sender, EventArgs e)
    {
        Label2.Text = Application["visit"].ToString();
        Label3.Text = DateTime.Now.ToString();
        if (Session["login"] == "true")
        {
            Label14.Text = Session["fname"].ToString();
            Label4.Visible = true;
            Label14.Visible = true;
            LinkButton10.Text = "LOG OUT";
            LinkButton11.Text = "(or login as new user)";
        }
       
        //if (!sound)
        //{
        //    sound = true; 
        //    SoundPlayer s = new SoundPlayer();
        //    //s.SoundLocation = "http://localhost:59267/PICS/Sounds_Of_Punjab_-_www.wav";
        //    //s.Play();
        //}
        Class1 a1 = new Class1();
        if (d == 0)
        {
            Class1 c = new Class1();
            c.sound();
            
            d++;
        }
        Label2.Text = Application["visit"].ToString();
        Label3.Text = DateTime.Now.ToString();
        if (d == 1 && a == false)
        {

            s.SoundLocation = "http://localhost:51204/Sounds_Of_Punjab_-_www.wav";
            s.Play();
            d++;
        }
    }
    protected void Menu1_MenuItemClick(object sender, MenuEventArgs e)
    {
        if (Menu1.SelectedValue.ToString() != "1")
            Response.Redirect(Menu1.SelectedValue.ToString() + ".aspx");
    }

    protected void TreeView1_SelectedNodeChanged(object sender, EventArgs e)
    {
        switch (TreeView1.SelectedValue.ToString())
        {
            case "FACEBOOK": Response.Redirect("http://www.facebook.com"); break;

            case "TWITTER": Response.Redirect("http://www.twitter.com"); break;

            case "FOLLOW US":
            case "RELATED LINKS": break;

            case "incredibleindia.com":
            case "punjabtourism.com": Response.Redirect("http://" + TreeView1.SelectedValue.ToString()); break;

            default: Response.Redirect(TreeView1.SelectedValue.ToString() + ".aspx"); break;
        }
    }
    protected void LinkButton4_Click(object sender, EventArgs e)
    {
        Response.Redirect("PHOTO.aspx");
    }
    protected void LinkButton1_Click(object sender, EventArgs e)
    {
        Response.Redirect("SITE MAP.aspx");
    }
    protected void Button2_Click(object sender, EventArgs e)
    {
        SqlConnection con = new SqlConnection();
        con.ConnectionString = ConfigurationManager.ConnectionStrings["cn"].ConnectionString;
        con.Open();
        SqlCommand cmd = new SqlCommand("insert into tbnews values(@email)", con);
        cmd.Parameters.Add("@email", SqlDbType.VarChar, 50).Value = TextBox2.Text;
        cmd.ExecuteNonQuery();
        con.Close();
        cmd.Dispose();
        
    }
    protected void LinkButton8_Click(object sender, EventArgs e)
    {
        Response.Redirect("REVIEWS.aspx#FEED");
    }

    protected void Timer2_Tick1(object sender, EventArgs e)
    {
        i++;
        if (i == 6) i = 1;
        Image1.ImageUrl = "~/PICS/Punjab Banner/" + i + ".JPG";
        Image9.ImageUrl = "~/PICS/Ad/" + i + ".jpg";
    }
    protected void LinkButton10_Click(object sender, EventArgs e)
    {
        Label14.Visible = false;
        Label4.Visible = false;
        Label4.Text = "";
        Session["uname"] = "";
        Session["fname"] = "";
        Session["dp"] = "";
        Session["login"] = "false";
        Response.Redirect("SignUp.aspx");
    }
    protected void LinkButton11_Click(object sender, EventArgs e)
    {
        Label14.Visible = false;
        Label4.Visible = false;
        Label4.Text = "";
        Session["uname"] = "";
        Session["fname"] = "";
        Session["dp"] = "";
        Session["login"] = "false";
        Response.Redirect("SignUp.aspx");
    }

    protected void LinkButton5_Click(object sender, EventArgs e)
    {
        Response.Redirect("http://www.facebook.com");
    }
    protected void LinkButton6_Click(object sender, EventArgs e)
    {
        Response.Redirect("http://www.twitter.com");
    }
    static bool a = false;
    protected void LinkButton12_Click(object sender, EventArgs e)
    {
        if (a == true)
        {
            LinkButton12.Text = "Sound OFF";
            s.Play();
            a = false;
        }
        else
        {
            LinkButton12.Text = "Sound ON";
            s.Stop();
            a = true;
            d = 1;
        }
    }
}
