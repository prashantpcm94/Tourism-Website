<%@ Application Language="C#" %>
<%@ Import Namespace="System.Data.SqlClient" %>
<%@ Import Namespace="System.Data" %>

<script runat="server">
    SqlCommand cmd = new SqlCommand();
    SqlConnection con = new SqlConnection();
    void Application_Start(object sender, EventArgs e) 
    {
        // Code that runs on application startup        
        con.ConnectionString = ConfigurationManager.ConnectionStrings["cn"].ConnectionString;
        con.Open();
        cmd.CommandText = "select * from tbtour";
        cmd.Connection = con;
        SqlDataReader dr = cmd.ExecuteReader();
        dr.Read();
        Application["visit"] = dr["visit"];
        dr.Close();
        con.Close();
    }
    
    void Application_End(object sender, EventArgs e) 
    {
        //  Code that runs on application shutdown
        con.ConnectionString = ConfigurationManager.ConnectionStrings["cn"].ConnectionString;
        con.Open();
        cmd.CommandText = "update tbtour set visit=@visit";
        cmd.Parameters.Add("@visit", SqlDbType.Int).Value = Application["visit"];
        cmd.Connection = con;
        cmd.ExecuteNonQuery();
        con.Close();        
    }
        
    void Application_Error(object sender, EventArgs e) 
    { 
        // Code that runs when an unhandled error occurs

    }

    void Session_Start(object sender, EventArgs e) 
    {
        //System.Web.UI.HtmlControls.HtmlAudio a1 = new HtmlAudio();
        //System.IO.TextWriter y;
        //y.Write("autoplay=\"autoplay\"");
        //HtmlTextWriter h1 = new HtmlTextWriter(y);           
        //a1.Src = "PICS/[Songs.PK] 02 - Ek Villain - Banjaara.mp3";        
        //a1.Attributes.AddAttributes(h1);
        Application.Lock();
        Application["visit"] = Convert.ToInt32(Application["visit"] )+ 1;
        Application.UnLock();
        // Code that runs when a new session is started
    }

    void Session_End(object sender, EventArgs e) 
    {
        // Code that runs when a session ends. 
        // Note: The Session_End event is raised only when the sessionstate mode
        // is set to InProc in the Web.config file. If session mode is set to StateServer 
        // or SQLServer, the event is not raised.

    }
       
</script>
