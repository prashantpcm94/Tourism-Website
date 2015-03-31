<%@ Application Language="C#" %>

<script runat="server">

    void Application_AuthenticateRequest(object sender, EventArgs e) 
    {
        if (HttpContext.Current.User != null)
        {
            if (HttpContext.Current.User.Identity.IsAuthenticated)
            {
                if (HttpContext.Current.User.Identity is FormsIdentity)
                {
                    FormsIdentity id = (FormsIdentity)(HttpContext.Current.User.Identity);
                    FormsAuthenticationTicket tk = id.Ticket;
                    string roles = tk.UserData;
                    string[] arr = { roles };
                    HttpContext.Current.User = new System.Security.Principal.GenericPrincipal(id, arr);
                    
                }
            }
        }

    }
    

       
</script>
