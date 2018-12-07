def num_connect_components(head, arr)
    cur = head
    count = 0
    found = false

    while cur
        if arr.include?(cur.val)
            found = true
        elsif found && !arr.include?(cur.val)
            found = !found
            count += 1
        end
        cur = cur.next
    end
    count += 1 if found
    count
end
