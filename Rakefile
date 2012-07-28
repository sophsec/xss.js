ASSETS = `git ls-files *.js`.split($/)

file 'xss.js' => ASSETS do
  File.open('xss.js','w') do |output|
    ASSETS.each { |file| output.puts(File.read(file)) }
  end
end

file 'xss.min.js' => 'xss.js' do
  system 'jsmin <xss.js >xss.min.js'
end
