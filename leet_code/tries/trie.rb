class Trie
  def initialize()
    @root = {}
  end

  def insert(word)
    node = @root
    word.each_char do |char|
      node[char] = {} if !node[char]
      node = node[char]
    end
    node[:actual_word] = true
  end

  def search(word)
    node = @root
    word.each_char do |char|
      return false if !node[char]
      node = node[char]
    end
    return true if node[:actual_word]
    return false
  end

  def starts_with(word)
    node = @root
    word.each_char do |char|
      return false if !node[char]
      node = node[char]
    end
    true
  end

end
