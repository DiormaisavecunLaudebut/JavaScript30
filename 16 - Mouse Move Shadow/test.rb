a = [1, 2, 3]
b = %w(a b c)
c = {}
d = []
n = 0

a.each_with_index do |v, i|
  d << (c[b[i]] = v)
end

