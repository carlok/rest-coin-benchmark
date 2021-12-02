var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();
app.MapPost("/coin", (Coin req) => new Coin
{
    Win = req.Win == new Random().NextDouble() >= 0.5
});

app.Run();

record struct Coin
{
    public bool Win { get; set; }
}