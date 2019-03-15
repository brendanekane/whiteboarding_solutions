class Trie

  def initialize
    @root = {}
  end

  def insert(word)
    node = @root
    word.each_char do |char|
      node[char] = {} if !node[char]
      node = node[char]
    end
    node[:prefix] = true
  end

  def shortest_prefix(word)
    node = @root
    replace = ""
    word.each_char do |char|
      return word if !node[char]
      replace += char
      node = node[char]
      return replace if node[:prefix]
    end
  end

end

def replace_words(dict, sentence)
  trie = Trie.new()
  dict.each {|prefix| trie.insert(prefix)}
  result = sentence.split(" ").map {|word| trie.shortest_prefix(word)}
  result.join(" ")
end
