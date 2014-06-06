desc "compile and run the site"
task :default do
  pids = [
    spawn("jekyll serve --watch --config _config-development.yml"),
    spawn("scss --watch _sass/main.scss:assets/css/main.css")
  ]

  trap "INT" do
    Process.kill "INT", *pids
    exit 1
  end

  loop do
    sleep 1
  end
end
