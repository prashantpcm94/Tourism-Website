using System;
using System.Configuration;
using System.Data;
using System.Linq;
using System.Web;
using System.Web.Security;
using System.Web.UI;
using System.Web.UI.HtmlControls;
using System.Web.UI.WebControls;
using System.Web.UI.WebControls.WebParts;
using System.Xml.Linq;
using System.Data.SqlClient;

public partial class _Default : System.Web.UI.Page 
{
    SqlConnection con = new SqlConnection();
    protected void Page_Load(object sender, EventArgs e)
    {
        con.ConnectionString = ConfigurationManager.ConnectionStrings["cn"].ConnectionString;
        if (con.State == ConnectionState.Closed)
        {
            con.Open();
        }
    }
    protected void Button1_Click(object sender, EventArgs e)
    {
        SqlCommand cmd = new SqlCommand();
        cmd.CommandText = "select * from log where username=@username and password=@password";
        cmd.Connection = con;
        cmd.Parameters.Add("@username", SqlDbType.VarChar, 50).Value = TextBox1.Text;
        cmd.Parameters.Add("@password", SqlDbType.VarChar, 50).Value = TextBox2.Text;
        SqlDataReader dr = cmd.ExecuteReader();
        if (dr.HasRows)
        {
            dr.Read();
            string role = dr["role"].ToString();

            FormsAuthenticationTicket tk = new FormsAuthenticationTicket(1, TextBox1.Text, DateTime.Now, DateTime.Now.AddDays(1), false, role);
            string st = FormsAuthentication.Encrypt(tk);
            HttpCookie ck = new HttpCookie(FormsAuthentication.FormsCookieName, st);

            Response.Cookies.Add(ck);

            if (role == "admin")
            {
                Response.Redirect("admin/adminpage.aspx");
            }
            if (role == "emp")
            {
                Response.Redirect("emp/emppage.aspx");
            }
            if (role == "user")
            {
                Response.Redirect("Default.aspx");
            }

        }
        else
        {
            Label1.Text = "invalid user";
        }
        

    }
}
