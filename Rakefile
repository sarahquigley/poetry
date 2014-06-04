desc "compile and run the site"
task :default do
  pids = [
    spawn("jekyll serve --watch"),
    spawn("scss --watch _sass/main.scss:css/main.css")
  ]

  trap "INT" do
    Process.kill "INT", *pids
    exit 1
  end

  loop do
    sleep 1
  end
end