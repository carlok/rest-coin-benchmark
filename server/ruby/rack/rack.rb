require "json"
require "rack"
require "thin"

class HelloWorld
  def play(bet)
    toss = rand(0..1).zero?

    toss == bet
  end

  def call(env)
    req = Rack::Request.new(env)
    post = JSON.parse(env['rack.input'].read)
    [ 200, { "Content-Type" => "application/json" }, [{"win": play(post['bet'])}.to_json] ] # play(post['bet'])}.to_json] ]
  end
end

Rack::Handler::Thin.run HelloWorld.new
