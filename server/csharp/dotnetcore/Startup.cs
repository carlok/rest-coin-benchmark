using System;
using System.Text.Json;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;

namespace coinapi
{
    public class Startup
    {
        public void Configure(IApplicationBuilder app)
        {
            app.UseRouting();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapPost("/coin", async context =>
                {
                    context.Response.ContentType = "application/json";
                    context.Response.StatusCode = StatusCodes.Status200OK;
                    var request = await JsonSerializer.DeserializeAsync<CoinRequest>(context.Request.Body, cancellationToken: context.RequestAborted);
                    var check = request.win ? 1 : 0;
                    var rnd = new Random().Next(0, 2);
                    var result = JsonSerializer.Serialize(new CoinRequest { win = check == rnd });
                    await context.Response.WriteAsync(result);
                });
            });
        }
    }

    public class CoinRequest
    {
        public bool win { get; set; }
    }
}
