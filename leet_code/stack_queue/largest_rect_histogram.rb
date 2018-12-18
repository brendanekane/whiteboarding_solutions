def largest_rectangle_area(heights)
    return nil if !heights
    return heights[0] if heights.length === 1

    stack_h, stack_p = [], []
    temp_h, temp_p = 0, 0
    temp_size, max_size = 0, 0
    height, position = 0, 0

    calc_max_height = lambda do
      temp_h = stack_h.pop
      temp_p = stack_p.pop
      temp_size = temp_h * ( position - temp_p)
      max_size = [temp_size, max_size].max
    end

    heights.each_with_index do |bar_height, idx|
      height = bar_height
        position = idx
        if stack_h.empty? || height > stack_h[-1]
            stack_h.push(height)
            stack_p.push(idx)
        elsif (height < stack_h[-1])
            while stack_h.any? && height < stack_h[-1]
              calc_max_height.call
            end
            stack_h.push(height)
            stack_p.push(temp_p)
        end
    end
    while stack_h.any?
      calc_max_height.call
    end
    max_size
end
