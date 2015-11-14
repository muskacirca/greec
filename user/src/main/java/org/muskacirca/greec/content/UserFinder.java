package org.muskacirca.greec.content;

import com.mysema.query.jpa.impl.JPAQuery;
import org.muskacirca.greec.content.model.User;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import static org.muskacirca.greec.content.model.QUser.user;

/**
 * User finder utility
 */
public class UserFinder {

    @PersistenceContext(unitName = "User")
    private EntityManager entityManager;

    public UserFinder() {
    }

    public UserFinder(EntityManager entityManager) {
        this.entityManager = entityManager;
    }

    public User findByLogin(String login) {
        return new JPAQuery(entityManager)
                .from(user).where(
                        user.login.eq(login))
                .singleResult(user);
    }

}
